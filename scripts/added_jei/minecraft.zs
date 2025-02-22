import crafttweaker.api.text.Component;
import mods.jeitweaker.Jei;

Jei.addIngredientInformation(
  <item:minecraft:item_frame>, 
  Component.literal(
    "Right-click on an empty Item Frame with a Glass Pane to make the frame invisible.  Left-click on an invisible frame to remove the displayed item, but be careful not to forget where the invisible frame is!  Left-click on an empty invisible frame to break the Item Frame.  An empty invisible frame can have an item applied by right-clicking it with the desired item."
  )
);

Jei.addIngredientInformation(
  <item:minecraft:glow_item_frame>, 
  Component.literal(
    "Right-click on an empty Glow Item Frame with a Glass Pane to make the frame invisible.  Left-click on an invisible frame to remove the displayed item, but be careful not to forget where the invisible frame is!  Left-click on an empty invisible frame to break the Glow Item Frame.  An empty invisible frame can have an item applied by right-clicking it with the desired item."
  )
);
