$(document).ready(function() {
    // Form field focus and blur handling
    function handleFocusBlurEvents(selector, colorOnFocus, colorOnBlur) {
        $(selector).on('focus', function() {
            $(this).css('color', colorOnFocus);
        }).on('blur', function() {
            if ($(this).val() === '') {
                $(this).css('color', colorOnBlur);
            }
        }).on('input', function() {
            $(this).css('color', colorOnFocus);
        });
    }

    handleFocusBlurEvents('.form-control, .login-select', '#000', '#A0A0A0');

    // Checkbox change event handling
    function updateCheckboxLabelColor(selector, checkedColor, uncheckedColor) {
        $(selector).change(function() {
            const label = $(this).next('label');
            label.css('color', this.checked ? checkedColor : uncheckedColor);
        }).each(function() {
            const label = $(this).next('label');
            label.css('color', this.checked ? checkedColor : uncheckedColor);
        });
    }

    updateCheckboxLabelColor('#agreeCheckbox, .form-check-input', '#000', '#A0A0A0');

    // Toggle button state based on checkbox selection
    function toggleButtonState() {
        const isChecked = $('.form-check-input').is(':checked');
        $('#nextBtn').prop('disabled', !isChecked).toggleClass('disabled', !isChecked);
    }

    toggleButtonState();
    $('.form-check-input').on('change', toggleButtonState);

    // Popup handling
    function handlePopup(openSelector, popupSelector) {
        $(openSelector).click(function(event) {
            event.preventDefault();
            $('#overlay').fadeIn();
            $(popupSelector).fadeIn();
        });

        $('#overlay, #closeBtn, #closeregister, #closelevel').click(function() {
            $('#overlay').fadeOut();
            $(popupSelector).fadeOut();
        });
    }

    handlePopup('#questionnaireSubmitBtn', '#popup');
    handlePopup('#nextBtnp', '#popupp');
    handlePopup('#levelnextbtn', '#popup');
    handlePopup('#open1', '#popupFirst');
    handlePopup('#clickPopup2', '#MyPopup2');
    handlePopup('#popup3', '#MyPopup3');
    handlePopup('#openlevel', '#popuplevel');
    handlePopup('#openregister', '#register');
    handlePopup('#openlevel9', '#popuplevel9');
    handlePopup('#continue', '#MyPopup3');

    // Modal list item click handling
    $('.modal-list').on('click', 'li', function(event) {
        event.preventDefault();
        $('.modal-list li').removeClass('active');
        $('.toggle-img').hide();
        $(this).addClass('active').find('.toggle-img').show();

        setTimeout(function() {
            var offcanvasElement = document.getElementById('offcanvasBottom');
            var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            if (offcanvas) {
                offcanvas.hide();
            }
        }, 600);
    });

    // Claim list item click handling
    document.querySelectorAll('.claim-list li').forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');

            setTimeout(function() {
                var offcanvasElement = document.getElementById('offcanvasBottom'); 
                var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
                if (offcanvas) {
                    offcanvas.hide();
                }
            }, 900);
        });
    });

    // Web camera handling
    document.getElementById('but').addEventListener('click', function() {
        const video = document.getElementById('vid');
        video.muted = true;

        navigator.mediaDevices.getUserMedia({
            video: { facingMode: { exact: 'environment' } },
            audio: true
        }).then(stream => {
            video.srcObject = stream;
            video.onloadedmetadata = () => video.play();
        }).catch(alert);
    });

    // Login form validation
    const emailInput = $('#emailInput');
    const agreeCheckbox = $('#agreeCheckbox');
    const submitBtn = $('#submitBtn');
    const emailHelpText = $('#emailHelpText');
    const loginForm = $('#loginForm');
    const checkboxes = $('.form-check-input');

    function validateEmail(email) {
        const re = /@(?:ocbc\.com|bankofsingapore\.com|greateasternlife\.com|gmail\.com)$/;
        return re.test(email);
    }

    function updateSubmitButtonState() {
        const isAnyChecked = checkboxes.is(':checked');
        const emailValid = validateEmail(emailInput.val());
        const canSubmit = isAnyChecked && emailInput.val() && agreeCheckbox.is(':checked') && emailValid;

        submitBtn.toggleClass('disabled', !canSubmit);

        emailHelpText.toggleClass('invalid', !emailValid && emailInput.val());
    }

    emailInput.on('input', updateSubmitButtonState);
    agreeCheckbox.on('change', updateSubmitButtonState);
    checkboxes.on('change', updateSubmitButtonState);

    submitBtn.on('click', function(event) {
        if (submitBtn.hasClass('disabled')) {
            event.preventDefault();
        }
    });

    loginForm.on('submit', function(event) {
        if (!validateEmail(emailInput.val())) {
            event.preventDefault();
            emailHelpText.addClass('invalid');
        }
    });
});
