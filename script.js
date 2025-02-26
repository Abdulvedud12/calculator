const display = document.querySelector('.display');
        const INITIAL_DISPLAY = '0';
        
        function addToDisplay(value) {
            display.textContent = display.textContent === INITIAL_DISPLAY ? 
                value : display.textContent + value;
        }

        function clearDisplay() {
            display.textContent = INITIAL_DISPLAY;
        }

        function backspace() {
            display.textContent = display.textContent.length === 1 ? 
                INITIAL_DISPLAY : display.textContent.slice(0, -1);
        }

        function calculate() {
            try {
                let expression = display.textContent
                    .replace(/sin\(/g, 'Math.sin(')
                    .replace(/cos\(/g, 'Math.cos(')
                    .replace(/tan\(/g, 'Math.tan(');
                
                const result = eval(expression);
                display.textContent = Number.isInteger(result) ? 
                    result : parseFloat(result.toFixed(8));
            } catch (error) {
                const errorMessages = {
                    'ar': 'خطأ',
                    'en': 'Error',
                    'tr': 'Hata'
                };
                display.textContent = errorMessages[document.documentElement.lang] || 'Error';
            }
        }

        function changeLanguage(lang) {
            document.documentElement.lang = lang;
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
            display.style.textAlign = lang === 'ar' ? 'right' : 'left';
        }

        function toggleTheme() {
            const root = document.documentElement;
            const currentTheme = root.getAttribute('data-theme');
            root.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
        }

        // Initialize theme
        document.documentElement.setAttribute('data-theme', 'dark');