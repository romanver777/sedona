(function() {

	// открытие/закрытие меню на мобилах
	(function() {

		const mobileMenu = document.querySelector('.mobile-menu');
		const container = document.querySelector('.container');
		const menuOpenLink = document.querySelector('.menu__btn_gamburger');
		const menuCloseLink = document.querySelector('.mobile-menu__btn_cross');

		menuOpenLink.addEventListener('click', (e) => {

			e.preventDefault();
			mobileMenu.classList.add('mobile-menu_show');
			container.classList.add('container_margin-top');
			menuOpenLink.classList.add('hided');
		});

		menuCloseLink.addEventListener('click', (e) => {

			e.preventDefault();
			mobileMenu.classList.remove('mobile-menu_show');
			container.classList.remove('container_margin-top');
			menuOpenLink.classList.remove('hided');
		});

	})();

	// map

	(function (){

		const token = 'pk.eyJ1IjoiY29udHJhNzciLCJhIjoiY2p0anR2MWEwMnZrMjN5cDhsbXczeDJ1cSJ9.Q9r4aUzdARiggKd4gEmFDA';
		const mapStyle = 'mapbox://styles/contra77/ckg92q4wq09fs19n84xqpbb8n';

		const mapCenterCoords = [-111.798486, 34.757056];
		const mapMarkerCoords = [-111.798486, 34.863156];
		const mapMarkerColor = '#81b3d2';
		const mapDiv = 'map';
		const zoom = 7.3;

		mapboxgl.accessToken = token;

		let map = new mapboxgl.Map({
			container: mapDiv,
			style: mapStyle,
			center: mapCenterCoords,
			zoom: zoom
		});
		// запрет зума мышью
		map.scrollZoom.disable();
		// кнопки зума
		// 	map.addControl(new mapboxgl.NavigationControl(), 'top-left');
		// }

		let marker = new mapboxgl.Marker({ color: mapMarkerColor })
			.setLngLat(mapMarkerCoords).addTo(map);

	})();

})();
