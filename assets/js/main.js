
$(document).ready(function() {
    $('.form-control, .login-select,').on('focus', function() {
        $(this).css('color', '#000');
    });

    $('.form-control, .login-select').on('blur', function() {
        if ($(this).val() === '') {
            $(this).css('color', '#A0A0A0');
        }
    });

    $('.form-control').on('input', function() {
        $(this).css('color', '#000');
    });
    $('#agreeCheckbox').change(function() {
        if (this.checked) {
            $(this).next('label').css('color', '#000');
        } else {
            $(this).next('label').css('color', '#A0A0A0');
        }
    });
    $('.form-check-input').change(function() {
        if (this.checked) {
            $(this).next('label').css('color', '#000');
        } else {
            $(this).next('label').css('color', '#A0A0A0');
        }
    });

    $('.form-check-input').each(function() {
        if (this.checked) {
            $(this).next('label').css('color', '#000');
        } else {
            $(this).next('label').css('color', '#A0A0A0');
        }
    });
});



// ----popup-data--

$(document).ready(function() {
    function toggleButton() {
        const isChecked = $('.form-check-input').is(':checked');
        if (isChecked) {
            $('#nextBtn').removeAttr('disabled').removeClass('disabled');
        } else {
            $('#nextBtn').attr('disabled', 'disabled').addClass('disabled');
        }
    }
    toggleButton();
    $('.form-check-input').change(function() {
        toggleButton();
    });
    $('#questionnaireSubmitBtn').click(function(event) {
        event.preventDefault();
        if (!$(this).attr('disabled')) {
            $('#overlay').fadeIn();
            $('#popup').fadeIn();
        }
    });
    $('#nextBtnp',).click(function(event) {
        event.preventDefault();
        $('#overlay').fadeIn();
        $('#popup').fadeOut();
        $('#popupp').fadeIn();
    });
    $('#overlay, #closeBtn').click(function() {
        $('#overlay').fadeOut();
        $('#popup').fadeOut();
        $('#popupp').fadeOut();
    });

});

$(document).ready(function() {
    $('#levelnextbtn').click(function(event) {
        event.preventDefault();
        $('#overlay').fadeIn();
        $('#popup').fadeIn();
    });

    $('#overlay, #closeBtn').click(function() {
        $('#overlay').fadeOut();
        $('#popup').fadeOut();
    });
});

$(document).ready(function() {
    $('#open1').click(function() {
        $('#overlay').fadeIn();
        $('#popupFirst').fadeIn();
    });

    $('#overlay, #closeBtn').click(function() {
        $('#overlay').fadeOut();
        $('#popupFirst').fadeOut();
        $('#MyPopup2').fadeOut();
        $('#MyPopup3').fadeOut();
        $('#popupp').fadeOut();
    });

    $('#clickPopup2').click(function(event) {
        event.preventDefault();
        $('#overlay').fadeIn();
        $('#MyPopup2').fadeIn();
    });

    $('#popup3').click(function(event) {
        event.preventDefault();
        $('#overlay').fadeIn();
        $('#MyPopup3').fadeIn();
    });
});

$(document).ready(function() {
    $('#openlevel').click(function(event) {
        event.preventDefault();
        $('#overlay').fadeIn();
        $('#popuplevel').fadeIn();
    });

    $('#overlay, #closelevel').click(function() {
        $('#overlay').fadeOut();
        $('#popuplevel').fadeOut();
    });
});

$(document).ready(function() {
    $('#openregister').click(function(event) {
        event.preventDefault();
        $('#overlay').fadeIn();
        $('#register').fadeIn();
    });

    $('#overlay, #closeregister').click(function() {
        $('#overlay').fadeOut();
        $('#register').fadeOut();
    });
});
$(document).ready(function() {
    $('#openlevel9').click(function(event) {
        event.preventDefault();
        $('#overlay').fadeIn();
        $('#popuplevel9').fadeIn();
    });

    $('#overlay, #closeBtn').click(function() {
        $('#overlay').fadeOut();
        $('#popuplevel').fadeOut();
    });
});
$(document).ready(function() {
    $('#continue').click(function(event) {
        event.preventDefault();
        $('#overlay').fadeIn();
        $('#MyPopup3').fadeIn();
    });

    $('#overlay, #closeBtn').click(function() {
        $('#overlay').fadeOut();
        $('#MyPopup3').fadeOut();
    });
});
$(document).ready(function() {
    $('.modal-list li').click(function(event) {
        event.preventDefault();
        $('.modal-list li').removeClass('active');
        $('.toggle-img').hide();
        $(this).find('.toggle-img').show();
        $(this).addClass('active');

        setTimeout(function() {
            var offcanvasElement = document.getElementById('offcanvasBottom');
            var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            if (offcanvas) {
                offcanvas.hide();
            }
        }, 600);
    });
});

// --claim list
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.claim-list li').forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
            
            setTimeout(function() {
                var offcanvasElement = document.getElementById('offcanvasBotom'); 
                var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
                if (offcanvas) {
                    offcanvas.hide();
                }
            }, 900); 
        });
    });
});

// -----------opan web clam

document.addEventListener("DOMContentLoaded", () => {
    let but = document.getElementById("but");
    let video = document.getElementById("vid");
    let mediaDevices = navigator.mediaDevices;
    video.muted = true;
    
    but.addEventListener("click", () => {
        mediaDevices
            .getUserMedia({
                video: {
                    facingMode: { exact: "environment" }
                },
                audio: true
            })
            .then((stream) => {
                video.srcObject = stream;
                video.addEventListener("loadedmetadata", () => {
                    video.play();
                });
            })
            .catch(alert);
    });
});

// ----login page
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('emailInput');
    const agreeCheckbox = document.getElementById('agreeCheckbox');
    const submitBtn = document.getElementById('submitBtn');
    const emailHelpText = document.getElementById('emailHelpText');
    const loginForm = document.getElementById('loginForm');
    const checkboxes = document.querySelectorAll(".form-check-input");

    function validateEmail() {
        const email = emailInput.value;
        const re = /@(?:ocbc\.com|bankofsingapore\.com|greateasternlife\.com|gmail.com)$/;
        return re.test(email);
      }
      
    function updateSubmitButtonState() {
      const isAnyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
      if (isAnyChecked && emailInput.value && agreeCheckbox.checked && validateEmail()) {
        submitBtn.classList.remove('disabled');
      } else {
        submitBtn.classList.add('disabled');
      }
  
      if (!validateEmail() && emailInput.value) {
        emailHelpText.classList.add('invalid');
      } else {
        emailHelpText.classList.remove('invalid');
      }
    }
  
    emailInput.addEventListener('input', updateSubmitButtonState);
    agreeCheckbox.addEventListener('change', updateSubmitButtonState);
    checkboxes.forEach(checkbox => checkbox.addEventListener('change', updateSubmitButtonState));
  
    submitBtn.addEventListener('click', function(event) {
      if (submitBtn.classList.contains('disabled')) {
        event.preventDefault();
      }
    });
  
    loginForm.addEventListener('submit', function(event) {
      if (!validateEmail()) {
        event.preventDefault();
        emailHelpText.classList.add('invalid');
      }
    });
  });

//   --questionart 
/*document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.form-check-input');
    const nextBtn = document.getElementById('nextBtnv');
    
    nextBtn.classList.add('disabled');
    nextBtn.setAttribute('aria-disabled', 'true');

    function toggleButton() {
        const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
        if (isChecked) {
            nextBtn.classList.remove('disabled');
            nextBtn.removeAttribute('aria-disabled');
        } else {
            nextBtn.classList.add('disabled');
            nextBtn.setAttribute('aria-disabled', 'true');
        }
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', toggleButton);
    });
});*/




  

