

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

  -- above and centar :default
  <img width="1440" alt="Screen Shot 2019-04-12 at 2 07 34 PM" src="https://user-images.githubusercontent.com/7904484/56039201-0419e800-5d34-11e9-980f-68efe4a3b11a.png">

    ![Alt text](https://user-images.githubusercontent.com/7904484/56038590-a2a54980-5d32-11e9-83d5-86757da32cf7.png?raw=true "Default Tooltip")

  -- above and left

    ![Alt text](https://user-images.githubusercontent.com/7904484/56038591-a33de000-5d32-11e9-9c7d-ec02e4335981.png?raw=true "Above and Left Tooltip")

  -- above and right

      ![Alt text](https://user-images.githubusercontent.com/7904484/56038592-a33de000-5d32-11e9-9994-d2b912b34263.png?raw=true "Above and Right Tooltip")

  -- beyond and left

      ![Alt text](https://user-images.githubusercontent.com/7904484/56038593-a33de000-5d32-11e9-8be2-f8bef8063d40.png?raw=true "Beyond and Left Tooltip")

  -- beyond and right

        ![Alt text](https://user-images.githubusercontent.com/7904484/56038594-a33de000-5d32-11e9-8df9-0f72fe0eb802.png?raw=true "Beyond and right Tooltip")

  -- beyond and center

          ![Alt text](https://user-images.githubusercontent.com/7904484/56038595-a33de000-5d32-11e9-9fcc-e75c7bfe4b77.png?raw=true "Beyond and right Tooltip")

  Usage:

      $('.my-target-class').quintessentialTooltip({
         beyond: true,
         right: true
      });

  or just:

      $('.tooltip').quintessentialTooltip();

