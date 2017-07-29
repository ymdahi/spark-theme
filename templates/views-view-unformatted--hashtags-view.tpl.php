<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<div class="col-md-4 grid-item">
    <?php if (!empty($title)): ?>
      <!-- <h3 class="grid-title"><?php print $title; ?></h3> -->
    <?php endif; ?>
    <?php foreach ($rows as $id => $row): ?>
      <div<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>>
        <?php print $row; ?>
      </div>
    <?php endforeach; ?>
</div>
