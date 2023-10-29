document.addEventListener("DOMContentLoaded", function () {
    const hideSidebarIcon = document.querySelector(".hide-sidebar-icon");
    const leftSideSection = document.querySelector(".left-side-section");
    const topListItems = document.querySelectorAll(".single-list-item");
    const display = document.querySelectorAll(".display");
    const listIcons = document.querySelectorAll(".list-item-icon");
    const listTexts = document.querySelectorAll(".list-item-text");
    const bottomSection = document.querySelector(".bottom-section");
    
    const rightMainSection = document.querySelector(".right-main-section");
    const rightSideSection = document.querySelector(".right-side-section");
    const footerSection = document.querySelector(".footer-section");

    let sidebarHidden = false;

    hideSidebarIcon.addEventListener("click", function () {
        if (sidebarHidden) {


            // Restore original positions
            leftSideSection.style.width = "18%";
            
            bottomSection.style.display = "flex";
            
            footerSection.style.display = "flex";
            rightMainSection.style.width = "100%";
            rightSideSection.style.width = "82%";


            topListItems.forEach(function (item) {
                item.style.display = "flex";
            });





            topListItems.forEach(function (item) {
                item.style.display = "flex";
            });
            listIcons.forEach(function (icon) {
                icon.style.display = "block";
                icon.style.width = "10%"
                icon.style.marginLeft = "5%";

            });
            listTexts.forEach(function (text) {
                text.style.fontSize = "100%";

                text.style.display = "flex";
            });




            sidebarHidden = false;

        } else {
            console.log("-----------------------------")
            //Hide the sidebar

            leftSideSection.style.width = "7%";


            bottomSection.style.display = "none";
           
            footerSection.style.display = "none";

            rightSideSection.style.width = "93%";



            

            /*<--------------addition starts--------------->*/

            listTexts.forEach(function (item, index) {
                // if (index < 4) {
                //     item.style.display = "block";
                //     item.style.marginLeft = 0;
                //     item.style.textAlign = "center";



                // } else {
                item.style.display = "none";
                // }

            });
            // listIcons.forEach(function (icon) {
            //     icon.style.display = "block";
            //     icon.style.width = "20%"

            //     icon.style.textAlign = "center";

            // });
            /*<--------------addition ends--------------->*/
            listIcons.forEach(function (icon, index) {
                if (index < 4) {
                    icon.style.display = "block";
                    icon.style.width = "60%"
                    icon.style.marginLeft = "5%";
                    
                    

                    // listTexts[index].style.fontSize = "60%";
                    // listTexts[index].style.display = "inline";
                } else {
                    icon.style.display = "none";
                    // listTexts[index].style.display = "block";
                }


            });
            

            display.forEach(function (icon, index) {
                if (index < 4) {
                    icon.style.display = "block";
                    // listTexts[index].style.fontSize = "60%";
                    // listTexts[index].style.display = "inline";
                } else {
                    icon.style.display = "block";
                    // listTexts[index].style.display = "block";
                }


            });







            /*----------------- commented this code block----------------*/
            // listTexts.forEach(function (text, index) {
            //     if (index > 3) {
            //         text.style.display = "none";
            //     } else {
            //         text.style.fontSize = "70%";
            //         text.style.display = "inline";
            //     }


            // });



            sidebarHidden = true;
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const showMoreButton = document.querySelector(".show-more");
    const hiddenItems = document.querySelectorAll(".hidden-item");
    let moreItemsVisible = false;

    showMoreButton.addEventListener("click", function () {
        if (!moreItemsVisible) {
            // Show hidden items
            hiddenItems.forEach(function (item) {
                item.style.display = "flex";
            });
            moreItemsVisible = true;
        } else {
            // Hide hidden items
            hiddenItems.forEach(function (item) {
                item.style.display = "none";
            });
            moreItemsVisible = false;
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const showMoreButton = document.querySelector(".show-more");
    const showMoreeeButton = document.querySelector(".show-moreee");
    const showLessButton = document.querySelector(".show-less");
    const showLesssButton = document.querySelector(".show-lesss");
    const hiddenItems = document.querySelectorAll(".hidden-item");
    let moreItemsVisible = false;

    showMoreButton.addEventListener("click", function () {
        // Show additional items and "Show less" button
        hiddenItems.forEach(function (item) {
            item.style.display = "flex";
        });
        showLessButton.style.display = "flex";
        showMoreButton.style.display = "none";
        moreItemsVisible = true;
    });

    showMoreeeButton.addEventListener("click", function () {
        // Show additional items and "Show less" button
        hiddenItems.forEach(function (item) {
            item.style.display = "flex";
        });
        showLesssButton.style.display = "flex";
        showMoreeeButton.style.display = "none";
        moreItemsVisible = true;
    });

    showLessButton.addEventListener("click", function () {
        // Hide additional items and "Show more" button
        hiddenItems.forEach(function (item) {
            item.style.display = "none";
        });
        showMoreButton.style.display = "flex";
        showLessButton.style.display = "none";
        moreItemsVisible = false;
    });

    showLesssButton.addEventListener("click", function () {
        // Hide additional items and "Show more" button
        hiddenItems.forEach(function (item) {
            item.style.display = "none";
        });
        showMoreeeButton.style.display = "flex";
        showLesssButton.style.display = "none";
        moreItemsVisible = false;
    });
});
