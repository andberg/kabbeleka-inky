(function(storyContent) {

    var story = new inkjs.Story(storyContent);
    var storyContainer = document.querySelectorAll("#story")[0];

    function showAfter(delay, el) {
        setTimeout(function() {
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
            return 200.0;
        }

        if (tag.indexOf("video:") == 0) {
            fileName = tag.substr(6);
            var element = document.createElement("video");
            element.controls = true;
            element.autoplay = true;
            element.src = fileName;
            storyContainer.appendChild(element);
            showAfter(delay, element);
            return 200.0;
        }

        if (tag.indexOf("sound:") == 0) {
            fileName = tag.substr(6);
            var element = document.createElement("audio");
            element.controls = false;
            element.autoplay = true;
            element.src = fileName;
            storyContainer.appendChild(element);
            showAfter(delay, element);
            return 200.0;
        }

        if (tag.indexOf("music:") == 0) {
            fileName = tag.substr(6);
            var element = document.createElement("audio");
            element.controls = false;
            element.autoplay = true;
            element.loop = true;
            element.id = 'loopMusic';
            element.src = fileName;
            storyContainer.appendChild(element);
            showAfter(delay, element);
            return 200.0;
        }

        if (tag.indexOf("backgroundColor:") == 0) {

            color = tag.substr(16);

            setTimeout(function() {
                document.getElementsByTagName("body")[0].classList = [];
                document.getElementsByTagName("body")[0].classList.add(color);
            }, delay);

            return 0.0;
        }

        if (tag.indexOf("fontColor:") == 0) {
            color = tag.substr(16);
            console.log(color);
            setTimeout(function() {
                document.getElementsByTagName("body")[0].style.color = color;
            }, delay);
            return 0.0;
        }

        if (tag.indexOf("wait:") == 0) {
            duration = tag.substr(5);
            return Number(duration);
        }

        if (tag.indexOf("url:") == 0) {
            url = tag.substr(4);
            setTimeout(function() {
                window.open(url);
            }, delay);
        }

        if (tag.indexOf("clear") == 0) {
            var existingContent = storyContainer.querySelectorAll("p, a, img, video, audio");
            if (delay <= 200.0) {
                for (var i = 0; i < existingContent.length; i++) {

                    var c = existingContent[i];

                    if (c.id != 'loopMusic') {
                       c.parentNode.removeChild(c);
                    }
                   
                }
            } else {
                setTimeout(function() {
                    for (var i = 0; i < existingContent.length; i++) {
                        var c = existingContent[i];

                        if (c.id != 'loopMusic') {
                           c.parentNode.removeChild(c);
                        }
                    }
                }, delay);
            }
            return 0.0;
        }
        return 0.0;
    }

    function continueStory() {

        var paragraphIndex = 0;
        var delay = 0.0;

        // Generate story text - loop through available content
        while (story.canContinue) {

            //Get ink to generate the next paragraph
            var paragraphText = story.Continue();
            var currentTags = story.currentTags;

            if (currentTags[0] == "save") {
                localStorage.setItem("inkParagraphText", paragraphText);
                localStorage.setItem("inkCurrentTags", JSON.stringify(currentTags));
                localStorage.setItem("inkStoryState", story.state.toJson());
            }

            if (story.currentTags[0] == "load" && localStorage.getItem("inkParagraphText") !== null) {
                paragraphText = localStorage.getItem("inkParagraphText");
                currentTags = JSON.parse(localStorage.getItem("inkCurrentTags"));
                story.state.LoadJson(localStorage.getItem("inkStoryState"));
            }

            // Process Tags
            currentTags.forEach(function(tag) {
                extraDelay = ProcessTag(tag, delay);
                delay += extraDelay;
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
        story.currentChoices.forEach(function(choice) {

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
            choiceAnchorEl.addEventListener("click", function(event) {

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