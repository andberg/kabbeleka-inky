(function (storyContent) {

    var story = new inkjs.Story(storyContent);
    var storyContainer = document.querySelectorAll("#story")[0];

    function showAfter(delay, el) {
        setTimeout(function () {
            el.classList.add("show")
        }, delay);
    }

    function scrollToBottom() {
        var progress = 0.0;
        var start = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        var dist = document.body.scrollHeight - window.innerHeight - start;
        if (dist < 0) return;

        var duration = 300 + 300 * dist / 100;
        var startTime = null;

        function step(time) {
            if (startTime == null) startTime = time;
            var t = (time - startTime) / duration;
            var lerp = 3 * t * t - 2 * t * t * t;
            window.scrollTo(0, start + lerp * dist);
            if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    function ProcessTag(tag, delay) {
        if (tag.indexOf("img:") == 0) {
            fileName = tag.substr(4);
            var element = document.createElement("img");
            element.src = fileName;
            storyContainer.appendChild(element);
            showAfter(delay, element);
        }

        if (tag.indexOf("video:") == 0) {
            fileName = tag.substr(6);
            var element = document.createElement("video");
            element.controls = true;
            element.autoplay = true;
            element.src = fileName;
            storyContainer.appendChild(element);
            showAfter(delay, element);
        }

        if (tag.indexOf("backgroundColor:") == 0) {
            color = tag.substr(16);
            if (color.indexOf("dark") !== -1) {
                setTimeout(function () {
                    document.getElementsByTagName("body")[0].classList.add("dark");
                }, delay);
            } else {
                setTimeout(function () {
                    document.getElementsByTagName("body")[0].classList.remove("dark");
                }, delay);
            }

        }

        if (tag.indexOf("fontColor:") == 0) {
            color = tag.substr(16);
            console.log(color);
            setTimeout(function () {
                document.getElementsByTagName("body")[0].style.color = color;
            }, delay);
        }

        if (tag.indexOf("url:") == 0) {
            url = tag.substr(4);
            setTimeout(function () {
                window.open(url)
            }, delay);
        }

        if (tag.indexOf("clear") == 0) {
            var existingContent = storyContainer.querySelectorAll("p, a, img, video");
            for (var i = 0; i < existingContent.length; i++) {
                var c = existingContent[i];
                c.parentNode.removeChild(c);
            }
        }
    }

    function continueStory() {

        var paragraphIndex = 0;
        var delay = 0.0;

        // Generate story text - loop through available content
        while (story.canContinue) {

            // Get ink to generate the next paragraph
            var paragraphText = story.Continue();

            // Process Tags
            story.currentTags.forEach(function (tag) {
                if (tag.indexOf("wait:") == 0) {
                    duration = tag.substr(5);
                    delay += Number(duration);
                } else {
                    ProcessTag(tag, delay);
                }

                delay += 200.0;
            });

            // Create paragraph element
            var paragraphElement = document.createElement("p");
            paragraphElement.innerHTML = paragraphText;
            storyContainer.appendChild(paragraphElement);

            // Fade in paragraph after a short delay
            showAfter(delay, paragraphElement);
            delay += 200.0;

        }

        // Create HTML choices from ink choices
        story.currentChoices.forEach(function (choice) {

            // Create paragraph with anchor element
            var choiceParagraphElement = document.createElement("p");
            choiceParagraphElement.classList.add("choice");
            choiceParagraphElement.innerHTML = `<a href='#'>${choice.text}</a>`;
            storyContainer.appendChild(choiceParagraphElement);

            // Fade choice in after a short delay
            showAfter(delay, choiceParagraphElement);
            delay += 200.0;

            // Click on choice
            var choiceAnchorEl = choiceParagraphElement.querySelectorAll("a")[0];
            choiceAnchorEl.addEventListener("click", function (event) {

                // Don't follow <a> link
                event.preventDefault();

                // Remove all existing choices
                var existingChoices = storyContainer.querySelectorAll("p.choice");
                for (var i = 0; i < existingChoices.length; i++) {
                    var c = existingChoices[i];
                    c.parentNode.removeChild(c);
                }

                // Tell the story where to go next
                story.ChooseChoiceIndex(choice.index);

                // Aaand loop
                continueStory();
            });
        });

        scrollToBottom();
    }

    continueStory();

})(storyContent);