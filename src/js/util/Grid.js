import grid from '../../scss/core/_break-points.scss';

const types = ['On', 'Off'];
const bp = ['xs', 'sm', 'md', 'lg', 'xl'];
const noop = () => {};
const capitalise = string => string.charAt(0).toUpperCase() + string.slice(1);
const typeCheck = (bp, type) => {
	if (!types.includes(type)) throw new Error(`Grid error, type must be either ${type.toString().replace(/,/, ' ,')}`);
	if (!bp.includes(bp)) throw new Error(`Grid error, bp be on off ${bp.toString().replace(/,/, ' ,')}`);
};

export default class Grid {
	current;
	registryTemplate = {
		xsOn: noop,
		xsOff: noop,
		smOn: noop,
		smOff: noop,
		mdOn: noop,
		mdOff: noop,
		lgOn: noop,
		lgOff: noop,
		xlOn: noop,
		xlOff: noop
	};
	registry = {
		...this.registryTemplate
	};

	constructor() {
		window.addEventListener('resize', this.resize);
	}

	resize = () => {
		window.requestAnimationFrame(() => this.exec());
	};

	exec() {
		if (window.matchMedia(`(max-width: ${grid.xs}px)`).matches) {
			this.on('xs');
		}
		if (window.matchMedia(`(min-width: ${grid.sm}px) and (max-width: ${grid.md - 1}px)`).matches) {
			this.on('sm');
		}
		if (window.matchMedia(`(min-width: ${grid.md}px) and (max-width: ${grid.lg - 1}px)`).matches) {
			this.on('md');
		}
		if (window.matchMedia(`(min-width: ${grid.lg}px) and (max-width: ${grid.xl - 1}px)`).matches) {
			this.on('lg');
		}
		if (window.matchMedia(`(min-width: ${grid.xl}px)`).matches) {
			this.on('xl');
		}
	}

	register(bp, type, func) {
		type = capitalise(type);
		typeCheck(bp, type);
		this.registry[`${bp}${type}`] = func;
	}

	unRegister(bp, type) {
		type = capitalise(type);
		typeCheck(bp, type);
		this.registry[`${bp}${type}`] = noop;
	}

	destroy() {
		window.removeEventListener('resize', this.resize);
		this.registry = {
			...this.registryTemplate
		};
	}

	on(bp) {
		if (this.current !== bp) {
			this.registry[`${bp}On`]();
			this.off(bp);
			this.current = bp;
		}
	}

	off(thisBp) {
		bp.forEach(bp => {
			if (thisBp !== bp) this.registry[`${bp}Off`]();
		});
	}
}
