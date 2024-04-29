type TBoard = {
	toggleOrientation: () => void;
	orientation: 'white' | 'black';
};

let orientation: 'white' | 'black' = $state('white');

export function createBoard(): TBoard {
	function toggleOrientation(): void {
		if (orientation === 'white') {
			orientation = 'black';
		} else {
			orientation = 'white';
		}
	}

	return {
		get orientation() {
			return orientation;
		},
		toggleOrientation
	};
}
