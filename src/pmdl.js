PMDL = function() {
  var template = "[{{ID}}]({{URL}}) - {{NAME}}";

  function mutationIsMatch(mutation) {
    return mutation.target.className == 'tn-panel__loom' &&
      mutation.addedNodes.length == 1;
  }

  function checkMutation(mutation) {
    if (!mutationIsMatch(mutation)) return;

    if (clipButton = findCopyButton(mutation)) {
      $(clipButton).before(createMDButton(clipButton));
    }
  }

  function checkMutations(mutations) {
    mutations.forEach(checkMutation);
  }

  function findCopyButton(mutation) {
    var added = $(mutation.addedNodes);
    return added.find('.clipboard_button:first')[0];
  }

  function storyId(story) {
    return story.find('input.id.text_value').val();
  }

  function storyUrl(story) {
    return story.find('button.link').data('clipboard-text');
  }

  function storyName(story) {
    return story.find('fieldset.story.name textarea.name').val();
  }

  function getStory(baseButton) {
    return $(baseButton).parents('.story.item');
  }

  function storyMDText(story) {
    return template
      .replace(/{{ID}}/, storyId(story))
      .replace(/{{URL}}/, storyUrl(story))
      .replace(/{{NAME}}/, storyName(story));
  }

  function createMDButton(baseButton) {
    var story = getStory(baseButton);
    var cloned = $(baseButton).clone();

    cloned.addClass('markdown-link');
    cloned.attr('data-clipboard-text', storyMDText(story));

    return cloned;
  }

  function init() {
    var observer = new MutationObserver(checkMutations);
    observer.observe(document, {
      subtree: true, childList: true
    });
  }

  return {
    init: init
  }
}();

$(function() { PMDL.init(); });
