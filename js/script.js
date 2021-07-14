// This script allows for the accordions to open and collapse. Note that the first toggler starts as "active"

/**WHITEBOARD
 * Click > if already active, remove active > if not active, add active, remove active from togglers that are not this togglers.
 * 
 */ 

const togglers = document.getElementsByClassName("accordion__toggler")

for(i = 0; i < togglers.length; i++) { // for each toggler that exists ...

    togglers[i].addEventListener("click", function() { // ... wait until someone clicks on it ...

        this.firstElementChild.classList.toggle("active") // ... then add the "active class to the toggler's first child element (accordion__title) ...
        this.lastElementChild.classList.toggle("active") // ... to the toggler's last child element (accordion__arrow) ...
        this.nextElementSibling.classList.toggle("active") // ... and finally to the toggler's sibling element (accordion__panel)!

    })

}