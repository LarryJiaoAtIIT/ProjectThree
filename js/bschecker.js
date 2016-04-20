function initMap() {
        var mapCanvas = document.getElementById('map');
		var coordinates = new google.maps.LatLng(41.8349, -87.6270)
		var styles = [{stylers: [{ hue: "#2a82bb" },{ saturation: -10 }]},
		 {	featureType: "road", elementType: "geometry",
      		stylers: [{ lightness: 100 }, { visibility: "simplified" }]},{
      		featureType: "road", elementType: "labels",
      		stylers: [{ visibility: "off" }]}];
		var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
		var cursor='img/cursor.png';
	
		
		
        var mapOptions = {
		  zoom: 13,
		  center:coordinates,
		  rotateControl:false,
		  backgroundColor:"#3498db",
		  draggableCursor:'cursor, auto;',
		  mapTypeControlOptions: {
          mapTypeId: [google.maps.MapTypeId.ROADMAP, 'map_style']}
		  
        };
   var map = new google.maps.Map(document.getElementById("map"), mapOptions);
   var mark= new google.maps.Marker({
	   		position:coordinates,
			map:map,
			draggable:true,
			icon:cursor,
			animation:google.maps.Animation.DROP,
			title:"Get Financial Aid!"});
			mark.addListener('click',toggleBounce); 
	map.mapTypes.set('map_style', styledMap);
  	map.setMapTypeId('map_style');
	mark.setMap(map);

      }
	  
function toggleBounce(){
	if(mark.getAnimation!==null){
		mark.setAnimation(null);
	}else{
		mark.setAnimation(google.maps.Animation.BOUNCE);
	}
}
		
	
      google.maps.event.addDomListener(window, 'load', initMap);
