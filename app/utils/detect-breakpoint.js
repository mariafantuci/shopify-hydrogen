/* eslint-disable prettier/prettier */
const detectBreakpoint = {

	/**
	 * Init module
	 */
	init: () => {

        detectBreakpoint.initBreakpoints();

        detectBreakpoint.detect(true);

        window.addEventListener("resize", () => {
            detectBreakpoint.detect(); 
        });
	},

    initBreakpoints: () => {

        window.breakpoints = window.breakpoints || {
            tablet: 600,
            desktop: 900,
            desktopLarge: 1200,
        };
    },

	/**
	 * Detect current breakpoint
	 */
    detect: (updateDom) => {

        detectBreakpoint.updateMode(updateDom);

        if (detectBreakpoint.detectChange()) {
            detectBreakpoint.triggerEvent();
        }
    },

    /**
	 * Update screen mode
	 */
    updateMode: (updateDom = false) => {

        let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
     
        if(windowWidth < window.breakpoints.desktopLarge) {

            if(windowWidth < window.breakpoints.desktop) {

                if(windowWidth < window.breakpoints.tablet) {
    
                    window.screenMode = 'mobile';
    
                } else {
    
                    window.screenMode = 'tablet';
                }
    
            } else {
    
                window.screenMode = 'desktop';
            }

        } else {

            window.screenMode = 'desktop-large';
        }

        if (updateDom) {
            document.querySelector('body').setAttribute('data-screen-mode', window.screenMode);
        }
    },

    /**
	 * Get current screen mode
	 */
    getMode: () => {

        return window.screenMode;
    },

	/**
	 * Trigger breakpoint change event
	 */
    triggerEvent: () => {

        detectBreakpoint.updateMode(true);

        let event = new CustomEvent('screen-breakpoint', {'detail': { 'mode' : detectBreakpoint.getMode() }});

        window.dispatchEvent(event);
    },

	/**
	 * Detect breakpoint change
	 */
    detectChange: () => {

        let mode = detectBreakpoint.getMode(),
            swap = window.screenSwapMode;

        if(mode === undefined && swap === undefined) {
            return true;
        }

        if(mode === 'mobile' && swap !== 'mobile') {
            window.screenSwapMode = 'mobile';
            return true;
        }

        if(mode === 'tablet' && swap !== 'tablet') {
            window.screenSwapMode = 'tablet';
            return true;
        }

        if(mode === 'desktop' && swap !== 'desktop') {
            window.screenSwapMode = 'desktop';
            return true;
        }

        if(mode === 'desktop-large' && swap !== 'desktop-large') {
            window.screenSwapMode = 'desktop-large';
            return true;
        }

        return false;
    }
};

export default detectBreakpoint;
