

  # Quintessential Tooltip

    -----------------
    |   _________   |
    |   |       |   |
    |   |_______|   |
    |       V       |
    |   #element    |
    -----------------

  Copy that you want to add to tooltip just put in `data-title` attribute of target element<br><br>
  By default, tooltip is always in the middle and above target element<br>
 ---------------------------
  options: (for positioning tooltip) important note: combine only 2 properties - above, beyond, left, right, center (one vertical and one horizontal)


<img width="470" alt="Default Tooltip" style="display: block;margin: 0 auto;"        src="https://user-images.githubusercontent.com/7904484/56038590-a2a54980-5d32-11e9-83d5-86757da32cf7.png">

<img width="470" alt="Above and Left Tooltip" style="display: block;margin: 0 auto;" src="https://user-images.githubusercontent.com/7904484/56038591-a33de000-5d32-11e9-9c7d-ec02e4335981.png">

<img width="470" alt="Above and Right Tooltip" style="display: block;margin: 0 auto;" src="https://user-images.githubusercontent.com/7904484/56038592-a33de000-5d32-11e9-9994-d2b912b34263.png">

<img width="470" alt="Beyond and Left Tooltip" style="display: block;margin: 0 auto;" src="https://user-images.githubusercontent.com/7904484/56038593-a33de000-5d32-11e9-8be2-f8bef8063d40.png">

<img width="470" alt="Beyond and Right Tooltip" style="display: block;margin: 0 auto;" src="https://user-images.githubusercontent.com/7904484/56038594-a33de000-5d32-11e9-8df9-0f72fe0eb802.png">

<img width="470" alt="Beyond and right Tooltip" style="display: block;margin: 0 auto;" src="https://user-images.githubusercontent.com/7904484/56038595-a33de000-5d32-11e9-9fcc-e75c7bfe4b77.png">

  Usage:

      $('.my-target-class').quintessentialTooltip({
         beyond: true,
         right: true
      });

  or just:

      $('.tooltip').quintessentialTooltip();

License
----

MIT

