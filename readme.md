

  # Quintessential Tooltip

    -----------------
    |   _________   |
    |   |       |   |
    |   |_______|   |
    |       V       |
    |   #element    |
    -----------------

  Copy that you want to add to tooltip just put in `data-title` attribute of target element
  By default, tooltip is always in the middle and above target element
 ---------------------------
  options: (for positioning tooltip) important note: combine only 2 properties - above, beyond, left, right, center (one vertical and one horizontal)

  -- above and left    ---------
                       |_______|
                         V
                         #

  -- above and right   --------
                       |______|
                            V
                            #

  -- above and centar :default

  -- beyond and left
                        #
                       -^-------
                       |_______|


  -- beyond and right
                              #
                       -------^-
                       |_______|
  -- beyond and center
                           #
                       ----^----
                       |_______|

  Usage:

      $('.my-target-class').quintessentialTooltip({
         beyond: true,
         right: true
      });

  or just:

      $('.tooltip')quintessentialTooltip();

