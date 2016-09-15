window.onload = function () {
    "use strict";
    
    var makeButton = document.getElementById("make"),
        randomButton = document.getElementById("random");
    
    makeButton.onclick = function () {
        var container = document.getElementById("container"),
            divs = [],
            randomv,
            i,
            colorOne = document.getElementById("colorOne").value,
            colorTwo = document.getElementById("colorTwo").value,
            colorThree = document.getElementById("colorThree").value,
            colorFour = document.getElementById("colorFour").value,
            colorFive = document.getElementById("colorFive").value;
        container.innerHTML = "";
        function loop() {
            divs[i] = document.createElement("div");
            divs[i].classList.add("pattern-divs");
            randomv = Math.floor((Math.random() * 10) + 1);
            if (randomv <= 2) {
                divs[i].style.background = colorOne;
            } else if (randomv <= 4) {
                divs[i].style.background = colorTwo;
            } else if (randomv <= 6) {
                divs[i].style.background = colorThree;
            } else if (randomv <= 8) {
                divs[i].style.background = colorFour;
            } else if (randomv <= 10) {
                divs[i].style.background = colorFive;
            }
            container.appendChild(divs[i]);
        }

        for (i = 0; i < 2520; i += 1) {
            loop();
        }
    };
    
    randomButton.onclick = function () {
        var container = document.getElementById("container"),
            divs = [],
            randomv,
            randomu,
            i;
        container.innerHTML = "";
        function loop() {
            divs[i] = document.createElement("div");
            divs[i].classList.add("pattern-divs");
            randomv = Math.floor((Math.random() * 10) + 1);
            if (randomv <= 1) {
                randomu = Math.floor((Math.random() * 10) + 1);
                if (randomv <= 1) {
                    divs[i].style.background = "#D5FDFF";
                } else if (randomv <= 2) {
                    divs[i].style.background = "#9DE5FF";
                } else if (randomv <= 3) {
                    divs[i].style.background = "#ACA8FF";
                } else if (randomv <= 4) {
                    divs[i].style.background = "#AC73FF";
                } else if (randomv <= 5) {
                    divs[i].style.background = "#E4FFFE";
                } else if (randomv <= 6) {
                    divs[i].style.background = "#A4F6F9";
                } else if (randomv <= 7) {
                    divs[i].style.background = "#FF99FE";
                } else if (randomv <= 8) {
                    divs[i].style.background = "#BA52ED";
                } else if (randomv <= 9) {
                    divs[i].style.background = "#F1FAFB";
                } else if (randomv <= 10) {
                    divs[i].style.background = "#A0E4F1";
                }
            } else if (randomv <= 2) {
                randomu = Math.floor((Math.random() * 10) + 1);
                if (randomv <= 1) {
                    divs[i].style.background = "#A0F6D2";
                } else if (randomv <= 2) {
                    divs[i].style.background = "#72DFD0";
                } else if (randomv <= 3) {
                    divs[i].style.background = "#03414D";
                } else if (randomv <= 4) {
                    divs[i].style.background = "#E6F8F6";
                } else if (randomv <= 5) {
                    divs[i].style.background = "#F7E74A";
                } else if (randomv <= 6) {
                    divs[i].style.background = "#09C6AB";
                } else if (randomv <= 7) {
                    divs[i].style.background = "#068888";
                } else if (randomv <= 8) {
                    divs[i].style.background = "#02556D";
                } else if (randomv <= 9) {
                    divs[i].style.background = "#EAEFC4";
                } else if (randomv <= 10) {
                    divs[i].style.background = "#9BDF46";
                }
            } else if (randomv <= 3) {
                randomu = Math.floor((Math.random() * 10) + 1);
                if (randomv <= 1) {
                    divs[i].style.background = "#25A55F";
                } else if (randomv <= 2) {
                    divs[i].style.background = "#346473";
                } else if (randomv <= 3) {
                    divs[i].style.background = "#2B4450";
                } else if (randomv <= 4) {
                    divs[i].style.background = "#497285";
                } else if (randomv <= 5) {
                    divs[i].style.background = "#DFEBED";
                } else if (randomv <= 6) {
                    divs[i].style.background = "#F78536";
                } else if (randomv <= 7) {
                    divs[i].style.background = "#ECFFC9";
                } else if (randomv <= 8) {
                    divs[i].style.background = "#64FED6";
                } else if (randomv <= 9) {
                    divs[i].style.background = "#82A6EE";
                } else if (randomv <= 10) {
                    divs[i].style.background = "#7871BF";
                }
            } else if (randomv <= 4) {
                randomu = Math.floor((Math.random() * 10) + 1);
                if (randomv <= 1) {
                    divs[i].style.background = "#EE9494";
                } else if (randomv <= 2) {
                    divs[i].style.background = "#EBFFAF";
                } else if (randomv <= 3) {
                    divs[i].style.background = "#B4E8C0";
                } else if (randomv <= 4) {
                    divs[i].style.background = "#FCFFC1";
                } else if (randomv <= 5) {
                    divs[i].style.background = "#7A4579";
                } else if (randomv <= 6) {
                    divs[i].style.background = "#D56073";
                } else if (randomv <= 7) {
                    divs[i].style.background = "#EC9E69";
                } else if (randomv <= 8) {
                    divs[i].style.background = "#FFFF8F";
                } else if (randomv <= 9) {
                    divs[i].style.background = "#343434";
                } else if (randomv <= 10) {
                    divs[i].style.background = "#2D4059";
                }
            } else if (randomv <= 5) {
                randomu = Math.floor((Math.random() * 10) + 1);
                if (randomv <= 1) {
                    divs[i].style.background = "#EA5455";
                } else if (randomv <= 2) {
                    divs[i].style.background = "#FDE9C9";
                } else if (randomv <= 3) {
                    divs[i].style.background = "#415F77";
                } else if (randomv <= 4) {
                    divs[i].style.background = "#D1E9EA";
                } else if (randomv <= 5) {
                    divs[i].style.background = "#FC5050";
                } else if (randomv <= 6) {
                    divs[i].style.background = "#FFD00C";
                } else if (randomv <= 7) {
                    divs[i].style.background = "#364F6B";
                } else if (randomv <= 8) {
                    divs[i].style.background = "#3FC1C9";
                } else if (randomv <= 9) {
                    divs[i].style.background = "#F5F5F5";
                } else if (randomv <= 10) {
                    divs[i].style.background = "#FC5185";
                }
            } else if (randomv <= 6) {
                randomu = Math.floor((Math.random() * 10) + 1);
                if (randomv <= 1) {
                    divs[i].style.background = "#121435";
                } else if (randomv <= 2) {
                    divs[i].style.background = "#FAF9F0";
                } else if (randomv <= 3) {
                    divs[i].style.background = "#EDEBCA";
                } else if (randomv <= 4) {
                    divs[i].style.background = "#FF5722";
                } else if (randomv <= 5) {
                    divs[i].style.background = "#F0F2AC";
                } else if (randomv <= 6) {
                    divs[i].style.background = "#6078EA";
                } else if (randomv <= 7) {
                    divs[i].style.background = "#7E94BF";
                } else if (randomv <= 8) {
                    divs[i].style.background = "#5357A6";
                } else if (randomv <= 9) {
                    divs[i].style.background = "#353E55";
                } else if (randomv <= 10) {
                    divs[i].style.background = "#B36458";
                }
            } else if (randomv <= 7) {
                randomu = Math.floor((Math.random() * 10) + 1);
                if (randomv <= 1) {
                    divs[i].style.background = "#BCD3C2";
                } else if (randomv <= 2) {
                    divs[i].style.background = "#E0E7B8";
                } else if (randomv <= 3) {
                    divs[i].style.background = "#1D2B53";
                } else if (randomv <= 4) {
                    divs[i].style.background = "#7E2553";
                } else if (randomv <= 5) {
                    divs[i].style.background = "#FF004D";
                } else if (randomv <= 6) {
                    divs[i].style.background = "#FFF024";
                } else if (randomv <= 7) {
                    divs[i].style.background = "#17E7A4";
                } else if (randomv <= 8) {
                    divs[i].style.background = "#F6F1F1";
                } else if (randomv <= 9) {
                    divs[i].style.background = "#E0D909";
                } else if (randomv <= 10) {
                    divs[i].style.background = "#7D7474";
                }
            } else if (randomv <= 8) {
                randomu = Math.floor((Math.random() * 10) + 1);
                if (randomv <= 1) {
                    divs[i].style.background = "#FBFFE0";
                } else if (randomv <= 2) {
                    divs[i].style.background = "#FFD6A6";
                } else if (randomv <= 3) {
                    divs[i].style.background = "#FF8AB4";
                } else if (randomv <= 4) {
                    divs[i].style.background = "#D86EFF";
                } else if (randomv <= 5) {
                    divs[i].style.background = "#9A47CB";
                } else if (randomv <= 6) {
                    divs[i].style.background = "#FF80F3";
                } else if (randomv <= 7) {
                    divs[i].style.background = "#FFD48B";
                } else if (randomv <= 8) {
                    divs[i].style.background = "#FFF079";
                } else if (randomv <= 9) {
                    divs[i].style.background = "#FA5555";
                } else if (randomv <= 10) {
                    divs[i].style.background = "#F7FB76";
                }
            } else if (randomv <= 9) {
                randomu = Math.floor((Math.random() * 10) + 1);
                if (randomv <= 1) {
                    divs[i].style.background = "#8DED8E";
                } else if (randomv <= 2) {
                    divs[i].style.background = "#2D7D8F";
                } else if (randomv <= 3) {
                    divs[i].style.background = "#F4F1AE";
                } else if (randomv <= 4) {
                    divs[i].style.background = "#FF8D52";
                } else if (randomv <= 5) {
                    divs[i].style.background = "#F85A16";
                } else if (randomv <= 6) {
                    divs[i].style.background = "#CA005E";
                } else if (randomv <= 7) {
                    divs[i].style.background = "#442A9D";
                } else if (randomv <= 8) {
                    divs[i].style.background = "#F14E95";
                } else if (randomv <= 9) {
                    divs[i].style.background = "#B13CD5";
                } else if (randomv <= 10) {
                    divs[i].style.background = "#FAF3FC";
                }
            } else if (randomv <= 10) {
                randomu = Math.floor((Math.random() * 10) + 1);
                if (randomv <= 1) {
                    divs[i].style.background = "#FE7187";
                } else if (randomv <= 2) {
                    divs[i].style.background = "#CA4B7C";
                } else if (randomv <= 3) {
                    divs[i].style.background = "#7A2E7A";
                } else if (randomv <= 4) {
                    divs[i].style.background = "#A8D7F7";
                } else if (randomv <= 5) {
                    divs[i].style.background = "#F2FF9B";
                } else if (randomv <= 6) {
                    divs[i].style.background = "#6AF79A";
                } else if (randomv <= 7) {
                    divs[i].style.background = "#57ACC5";
                } else if (randomv <= 8) {
                    divs[i].style.background = "#444B6C";
                } else if (randomv <= 9) {
                    divs[i].style.background = "#65EAD1";
                } else if (randomv <= 10) {
                    divs[i].style.background = "#FF917B";
                }
            }
            container.appendChild(divs[i]);
        }

        for (i = 0; i < 2520; i += 1) {
            loop();
        }
    };
};