<?php
/**
 * @file
 * The primary PHP file for this theme.
 */

function sparklearning_preprocess_page(&$vars, $hook) {
  if (isset($vars['node']->type)) {
    $vars['theme_hook_suggestions'][] = 'page__' . $vars['node']->type;
  }

  // adding back jquery ui plugin as it does not get loaded
  // for anonymous users: https://www.drupal.org/node/2165555
  drupal_add_library('system', 'ui');
}
function sparklearning_form_comment_form_alter(&$form, &$form_state) {
  $form['actions']['submit']['#value'] = t('Add Comment');
  $form['actions']['submit']['#attributes']['class'][] = 'btn-sm btn-primary';
}
