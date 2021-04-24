function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj; 
    };
  }
  return _typeof(obj);
}

//Script v. 1.0.0.8
var screenWidth,
  screenHeight,
  urlDirectory,
  ctaFav,
  tagsElement,
  adjustMenu = true;

var urlServices;
var curURL;
var post_title;
var twitter_params;

//header

var header,
  headerContainer,
  burgerIcon,
  infoTop,
  infoTopMobile,
  findHomeIcon,
  favsIcon,
  phoneIcon,
  communityIcon,
  logoWhite,
  logoBlack,
  regionSelect,
  regionList,
  community,
  cookiesContainer,
  popupBg,
  searchBlogIcon,
  searchBlogText;


//search

var search,
  searchOpened = false,
  moreFilterscontent,
  moreFilterOpened = false,
  searchForm,
  searchFilters,
  searchBG,
  imageSearch,
  cardSearch,
  filterSearch,
  communityFilters;

//footer

var logoFooter, contentFooter, contactFooter;

//menu

var menuClose,
  menuContanier,
  submenu,
  opened,
  communityPreview,
  communityMenuPreview,
  communityItem,
  communityHomes,
  communityType1,
  communityType2,
  subMenuMobile,
  subMenuMobileGlobal,
  exploreSubMenu,
  menuBackground,
  mainMenu,
  homebuyerTab,
  communityTab,
  menuList,
  urlSearch,
  resizedMenu = false;

//principal block vars

var principalBlock;

//full block vars

var fullBlock, full_block_child, contGalery_fullBlock;

//text block vars

var textBlock;

//communities block vars

var communitiesblock,
  communitiesBlock_gallery,
  communitiesBlock_galleryContainer,
  communitiesBlock_communityContainer,
  communitiesBlock_title;

//amenities

var amenitiesBlock_contGallery;

//splitBlock

var splitNew_block,
  contImg_splitNew_block,
  contText_splitNew_block,
  resizeFlag = false,
  setTimeSplit;

//card block

var cards_block,
  contFirstCardOut,
  cardsBlock_gallery,
  cardsBlock_container,
  contText_cardBlock;

//list block;

var list_block, listBlockContent, galleryList;

//Columns block

var infoTextColumn, imageConateinerColumns;

//featured block

var contGallery_featuredBlock;

//popUp gallery

var galleryPopupContainer, galleryPopup;

//popup region
var infoPopup, popupContent;

//maps

var mapCommunity,
  map_communities,
  markerList,
  iconsMap = {
    info: {
      icon: urlDirectory + "images/location-pin-map.png"
    },
    infoActive: {
      icon: urlDirectory + "images/location-pin-map-active.png"
    },
    adress: {
      icon: urlDirectory + "images/location-pin-map.png"
    },
    filter: {
      icon: urlDirectory + "images/location-pin-map.png"
    },
    filterActive: {
      icon: urlDirectory + "images/location-pin-map-active.png"
    },
    select: {
      icon: urlDirectory + "images/location-pin-map.png"
    },
    selectActive: {
      icon: urlDirectory + "images/location-pin-map-active.png"
    },
    localAmenities: {
      icon: urlDirectory + "images/local-amenities.png"
    },
    localAmenitiesActive: {
      icon: urlDirectory + "images/local-amenities-active.png"
    }
  };

//BLOG

var galleryBlog,
  containerBlog,
  categoriesList,
  shareblog,
  shareBlogMob,
  blogHeader,
  blogHeaderMobile,
  tagsHeader,
  categoriesHeader,
  submenuBlog,
  subMenuBlogContainer,
  banner_block,
  blogHeaderBG;

//PRESALE
var cardPresale, cardPresaleContainer, elevationImage, elevation;

//LISTING
var interior,
  principalImage,
  imagesContainer,
  currentInterior,
  nextInterior,
  listingArrow,
  flooplanIframe;

//submenu blog mob
var sub_menuMob, menuMob, mobSubmenu;

//bannerblog
var bannerFrameText;

//amenitiesListing
var imgAmenitiesOverview,
  listAmenitiesOverview,
  overviewImage,
  pointAmenitiesListing;

//communities page
var mapCommunities, listingCommunities, listinglist, listingListCommunities;

//Osc
var osc, contactBubble, phoneBubble, infoOsc, portraitOsc, buttonsOscMobile, infoOSC;

//scroll
var lastScrollTop = 0; 

//explore area
var elementArea;

//views vars
var fullBgDragLbox, minDragCont, minDragBg, bigDragCont, bigDragBg, closeIconDrag, panoramaMin, compass, dragIcon;
var viewsContent;

var splitBlock, gallery_splitBlock, text_splitBlock;
var textBox_fullblock,
  textBlock,
  titleTextBlock,
  infoTextBlock,
  textBlock_block,
  section_textBlock;

$(document).ready(function(e) {

  screenWidth = $(window).width();
  screenHeight = $(window).height();
  reziseTitleCards();
  createVars();
		
	//submenu
  locateSubMenuCommunities();
	
  setListeners();
  resizeEmpire();
  lazyLoad();
  //sebas
  noResPopup();
  loadFavsLocalStorage();
  setTimeout(function() {
    scrollToOtherPage();
  }, 300); 
  console.log("reload v.247");
  $('.zoom').pinchzoomer();
  activeFirstExploreArea();
  animateResults();
	
	setTimeout(scrolledHeader, 500);
	setTimeout(scrolledHeader, 100);
	setTimeout(scrolledHeader, 2500);
	
	setupOscMinimize();
		
  loadFavPage();
	resizeFavs();
	
	$('.cameraHomePlans').click(function(){
		openGalleryHomePlans($(this));
	});
	
});

function createVars() {
  ctaFav = $(".ctaFav");
  popupBg = $(".popupBg");

  //header
  header = $("#mainHeader");
  headerContainer = $(".header");
  burgerIcon = $(".burguerIcon");
  infoTop = $(".infoTop");
  infoTopMobile = $(".infoTopMobile");
  findHomeIcon = $(".findHomeIcon");
  phoneIcon = $(".phoneIconHeader");
  favsBtn = $(".favs");
  favsIcon = $(".favsIcon");
  communityIcon = $(".communityIcon");
  logoWhite = $(".logoWhite");
  logoBlack = $(".logoBlack");
  regionSelect = $(".regionSelect");
  regionList = $(".regionList");
  community = $(".community");
  findHome = $(".findHome");
  filterComm = $(".filterComm");
  cookiesContainer = $(".cookies");
  searchBlogIcon = $(".searchBlogIcon");
  searchBlogText = $(".findBlog .infoTopText");

  //search
  search = $("#searchHeader");
  moreFilter = $(".moreFilters");
  searchForm = $(".searchForm");
  moreFilterscontent = $(".moreFilterscontent");
  searchFilters = $(".searchFilters");
  searchBG = $(".searchBG");
  imageSearch = $(".listinglist .img_featuredBlock");
  cardSearch = $(".listinglist .contDesc_featuredBlock");
  filterSearch = $('.filterSearch');
  communityFilters = $('.communityFilters');

  //footer
  logoFooter = $(".logoFooter");
  contentFooter = $(".contentFooter");
  contactFooter = $(".contactFooter");

  //menu
  menuClose = $(".closeMenu");
  menuContanier = $(".menuContanier");
  submenu = $(".submenu");
  communityHomes = $(".communityHomes");
  communityType1 = $(".communityType1");
  communityType2 = $(".communityType2");
  subMenuMobileGlobal = $(".subMenuMobile");
  exploreSubMenu = $(".exploreSubMenu");
  menuBackground = $(".menuBackground");
  mainMenu = $(".mainMenu");
  communityTab = $(".communityTab");
  homebuyerTab = $(".homebuyerTab");
  menuList = $(".menuList");
  communityPreview = $(".communityPreview");
  communityMenuPreview = $(".communityMenuPreview");
  communityItem = $(".communityItem");

  //principal block
  principalBlock = $(".principal-block");

  //full block
  fullBlock = $(".full-block");
  contGalery_fullBlock = $(".contGalery_fullBlock");
  full_block_child = $(".full_block_child");

  //text block
  textBlock = $(".textBlock");

  //communities block
  communitiesblock = $(".communities-block");
  communitiesBlock_gallery = $(".communitiesBlock_gallery");
  communitiesBlock_galleryContainer = $(".communitiesBlock_galleryContainer");
  communitiesBlock_title = $(".communitiesBlock_title");
  communitiesBlock_communityContainer = $(
    ".communitiesBlock_communityContainer"
  );

  //amenities
  amenitiesBlock_contGallery = $(".amenitiesBlock_contGallery");

  //SplitBlock
  splitNew_block = $(".splitNew-block");
  contImg_splitNew_block = $(".imageGallerySplitBlock");
  contText_splitNew_block = $(".textGallerySplitblock");
  contAll_splitNew_block = $(".splitContainer");

  //cardsBlock
  cards_block = $(".cards-block");
  contFirstCardOut = $(".contFirstCardOut");
  cardsBlock_gallery = $(".cardsBlock_gallery");
  cardsBlock_container = $(".cardsBlock_container");
  contText_cardBlock = $(".contText_cardBlock");

  //listBlock
  list_block = $(".list-block");
  listBlockContent = $(".listBlockContent");
  galleryList = $(".galleryList");

  //Columns Block
  infoTextColumn = $(".infoTextColumn");
  imageConateinerColumns = $(".imageConateinerColumns");

  //featured Block
  contGallery_featuredBlock = $(".contGallery_featuredBlock");

  //gallery Popup
  galleryPopupContainer = $(".galleryPopupContainer");
  galleryPopup = $(".galleryPopup");

  //popup region
  popupContent = $('.popupContent');
  infoPopup = $('.infoPopup');

  //maps
  mapCommunity = $("#mapCommunity");
  map_communities = $("#map_communities");

  //BLOGS
  galleryBlog = $(".galleryBlog");
  containerBlog = $(".containerBlog");
  categoriesList = $(".categoriesList");
  shareblog = $(".shareblog");
  shareBlogMob = $(".shareBlogMob");
  blogHeader = $("#blogHeader");
  blogHeaderMobile = $("#blogHeaderMobile");
  tagsHeader = $(".tagsHeader");
  categoriesHeader = $(".categoriesHeader");
  fbShare = $(".fbShare");
  twShare = $(".twShare");
  submenuBlog = $(".submenuBlog");
  subMenuBlogContainer = $(".subMenuBlogContainer");
  banner_block = $(".banner-block");
  blogHeaderBG = $("#blogHeaderBG");

  //PRESALE
  cardPresale = $(".cardPresale");
  cardPresaleContainer = $(".cardPresaleContainer");
  elevation = $(".elevation");
  elevationImage = $(".elevationImage");

  //Listing
  principalImage = $(".principalImage");
  imagesContainer = $(".imagesContainer");
  interior = $(".interior");
  currentInterior = $(".currentInterior");
  nextInterior = $(".nextInterior");
  listingArrow = $(".listingArrow");
  flooplanIframe = $(".flooplanIframe");

  //submenublog mob
  mobSubmenu = $(".mobSubmenu");
  subMenuMob = $(".subMenuMob");
  sub_menuMob = $("#sub_menuMob");

  //bannerBlog
  bannerFrameText = $(".bannerFrameText");

  //communities page
  mapCommunities = $("#searchMap");
  listingCommunities = $(".listingCommunities");
  listingListCommunities = $(".listingListCommunities");
  listinglist = $(".listinglist");

  //osc
  osc = $("#osc");	
  infoOSC = $("#infoOSC");
  contactBubble = $(".contactBubble");
  phoneBubble = $(".phoneBubble");
  infoOsc = $(".infoOsc");
  portraitOsc = $(".portraitOsc");
  buttonsOscMobile = $(".buttonsOscMobile");

  section_textBlock = $(".text-block");
  textBlock_block = $(".textBlock-textblock");
  titleTextBlock = $(".titleTextblock");
  infoTextBlock = $(".infoTextBlock");

  //amenitiesListings
  imgAmenitiesOverview = $(".imgAmenitiesOverview");
  listAmenitiesOverview = $(".listAmenitiesOverview");
  overviewImage = $(".overviewImage");
  pointAmenitiesListing = $(".pointAmenitiesListing");

  //explore area
  elementArea = $(".elementArea");

  //views
  fullBgDragLbox = $('#fullBgDragLbox');
	minDragCont = $('#minDragCont');
	minDragBg = $('#minDragBg');
	bigDragCont = $('#bigDragCont');
	bigDragBg = $('#bigDragBg');
	closeIconDrag = $('#closeIconDrag');
	panoramaMin = $('#panoramaMin');
	compass = $('#compass');
  dragIcon = $('#dragIcon');
  viewsContent = $('.viewsContent');
}


//submenu
function locateSubMenuCommunities(){
	if( $("#contMenuFB").length > 0 ){
		var submenuCont = $("#contMenuHd").html();
		$("#contMenuHd").html("");
		$("#contMenuFB").html(submenuCont);
	}
	
	if( $(".smenucommunity").length > 0 ){		
		var hrefCurr = window.location.href;
		$(".smenucommunity").each(function(){
			var hrefAttr = $(this).attr("href");
			if( hrefAttr === hrefCurr || hrefAttr+"/" === hrefCurr ){
				$(this).parent().addClass("current");
			}
		});
	}
}

function setListeners() {

  //sebas
  $('.quickMoveHome').on('click', openCard);
  //fin sebas

  
  //explore area
  elementArea.on("click", function() {
    elementArea.removeClass("active");
    $(this).addClass("active");
    showLocalAmenities($(this).data("ammenitie"));
  });

  //communitiesPage
  $('.prevComMobile').on('click', function(){
    var currentCom = Number($('.currentComm').html());
    var totalComm = Number($('.lengthComm').html());
    var prevCom;
    if(currentCom == 1){
      prevCom = totalComm;
    }else{
      prevCom = currentCom - 1;
    }
    $('.currentComm').html(prevCom);
    google.maps.event.trigger(markersObjArr[prevCom-1], 'click');
  });
  
  $('.nextComMobile').on('click', function(){
    var currentCom = Number($('.currentComm').html());
    var totalComm = Number($('.lengthComm').html());
    var nextCom;
    if(currentCom == totalComm){
      nextCom = 1;
    }else{
      nextCom = currentCom + 1;
    }
    $('.currentComm').html(nextCom);
    google.maps.event.trigger(markersObjArr[nextCom-1], 'click');
  });

  //favs
//  favsBtn.on("click", sendFavs);
  ctaFav.on("click", addFavsLocalStorage); //BLOG

  fbShare.on("click", function() {
    socialShare("fb");
  });
  twShare.on("click", function() {
    socialShare("tw");
  });
  submenuBlog.hover(
    function() {
      opensubmenuBlog($(this).attr("id"));
    },
    function() {
      closeSubmenuBlog();
    }
  ); //menu
	
	blogHeaderBG.hover(
    function() {
      closeSubmenuBlog();
    }
  );

  submenu.on("click", openSubMenu);
  exploreSubMenu.on("click", openSubMenu);
  communityType1.on("click", loadTypeCommunities);
  communityType2.on("click", loadTypeCommunities); //seacrh

  findHome.on("click", openSearch);	
  searchBlogIcon.on("click", showSearchBlog);
  searchBlogText.on("click", showSearchBlog);
  filterSearch.on("click", openSearch);
  moreFilter.on("click", moreFilters); //change splitBlock

  $(".textGallerySplitblock").on("beforeChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    if (screenWidth < 768) {
      console.log($(slick.$slides[nextSlide]).innerHeight());
      $(this)
        .parent()
        .css({
          height:
            $(this)
              .parent()
              .find(".imageGallerySplitBlock")
              .innerHeight() + $(slick.$slides[nextSlide]).innerHeight()
        });
      $(this)
        .parent()
        .parent()
        .css({
          height: $(this)
            .parent()
            .innerHeight(),
          transition: "all 0.5s linear"
        });
      console.log(
        $(this)
          .parent()
          .innerHeight()
      );
      $(this)
        .parent()
        .parent()
        .parent()
        .outerHeight(
          $(this)
            .parent()
            .innerHeight()
        );
      $(this)
        .parent()
        .parent()
        .parent()
        .css({
          transition: "all 0.5s linear"
        });
    }
  });
  filterComm.on("click", function() {
    filterMenu($(this).data("search"));
  });

  //submenublog mob
  mobSubmenu.on("click", function() {
    openSubMenuBlogMob($(this).attr("id"));
  });

  //presale

  elevation.on("click", function() {
    var idElev = $(this).attr("id");
    var priceElev = $(this).data('price');
    var sizeElev = $(this).data('size');
    var idElevSplit = idElev.split("-")[1];
    changeElevation(idElevSplit, priceElev, sizeElev);
  });

  //listings movein ready
  interior.on("click", function() {
    var idImage = $(this).attr("id");
    var idSplit = idImage.split("-")[1];
    changeImageListing(idSplit);
  });

  listingArrow.on("click", function() {
    var curr = currentInterior.data("current");
    if ($(this).hasClass("arrow-prev")) {
      if (curr == 0) {
        curr = interior.length - 1;
      } else {
        curr--;
      }
    }
    if ($(this).hasClass("arrow-next")) {
      if (curr == interior.length - 1) {
        curr = 0;
      } else {
        curr++;
      }
    }
    changeImageListing(curr);
  });

  
listinglist.scroll(function(event){ 
  communityFilters.css('display', 'block');
  if(screenWidth > 768){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
     if($('.communitySelectedSearch').css('display') == 'block'){
       $('.communitySelectedSearch').css('margin-top', '0px');
     }
       communityFilters.css('top', '0px');
    } else {
     if($('.communitySelectedSearch').css('display') == 'block'){
       $('.communitySelectedSearch').css('margin-top', '40px');
      }
      communityFilters.css('top', '60px');
    }
    lastScrollTop = st;
  }else{
    communityFilters.css('top', '60px');
  }
});

listingCommunities.scroll(function(event){
  if(listingCommunities.hasClass('listingListCommunities')){
    communityFilters.css('display', 'block');
  }else{
    communityFilters.css('display', 'none');
  }
  // if(screenWidth > 768){
  //   var st = $(this).scrollTop();
  //   if (st > lastScrollTop){
  //    if($('.communitySelectedSearch').css('display') == 'block'){
  //      $('.communitySelectedSearch').css('margin-top', '0px'); 
  //    }
  //        communityFilters.css('top', '0px');
  //   } else {
  //    if($('.communitySelectedSearch').css('display') == 'block'){
  //      $('.communitySelectedSearch').css('margin-top', '40px');
  //     }
  //        communityFilters.css('top', '60px'); 
  //       }
  //       lastScrollTop = st;
  // }else{
        
  //       communityFilters.css('top', '60px'); 
  // }
});
	
	
/*handled search blog*/
	
	
	$( "#search_blog_form" ).submit(function( event ) {
		
		var searchText = $("#tex_search_form").val();
		var searchBlog = urlSearch.replace("search", "blog/search");		
		if( searchText != '' ){
			window.location.href = searchBlog+searchText+"/";
		}
		
		event.preventDefault();
		
	});
	
	
	$('#communityMenu .mobile__label').on('click', openSubmenuDropdown);
	$('#communityMenu .mobile__arrow').on('click', openSubmenuDropdown);
 
}

function openDotAmenities($el, opt) {
  if (opt == "text") {
    pointAmenitiesListing.removeClass("active");
    pointAmenitiesListing.find(".textAmenities").removeClass("active");
    $(".textAmenities").removeClass("active");
    $(".textAmenities").css("display", "none");
    $el.find(".textAmenities").css("display", "block");
    setTimeout(function(){
      $el.find(".textAmenities").addClass("active");
      var topText = $el.find(".textAmenities").innerHeight() + 5;
      $el.find(".textAmenities").css("top", -topText);   
    },100)
    $el.addClass("active");
  } else if (opt == "img") {
    pointAmenitiesListing.removeClass("active");
    $(".textAmenities").removeClass("active");
    setTimeout(function(){
      $(".textAmenities").css("display", "none");
    },100)
    $el.addClass("active");
    $('.imageAmenitieCont').addClass('active');
    $('.imageAmenitieCont .imgAmenitie').css('background-image', 'url('+$el.data('img')+')');
    setTimeout(function(){
      $('.imageAmenitieCont').css({'opacity': '1', 'top': '0'});
    }, 100);
  }
}

function closeAmGal(){
  $('.imageAmenitieCont').css({'opacity': '0', 'top': '-100%'});
  setTimeout(function(){
    $('.imageAmenitieCont').removeClass('active');
    pointAmenitiesListing.removeClass('active');
  }, 300);
}

$(window).resize(function() {
  resizeEmpire();
  lazyLoad();
});
$(window).on("scroll", function() {
  lazyLoad();
  scrolledHeader();
  scrollOsc();

  if ($("#blogHeader").length > 0) {
    blogHeaderScroll();
  }
});

var fullBlock_TextContainer = $('.fullBlock_TextContainer');

var manually_minimized = false;
var manually_minimized_first = true;

function setupOscMinimize(){
	if(deactivate_minimize_osc==1){
		var _HMTL = '<div id="minOSC" onclick="minimizeOSC()"></div>';
		infoOSC.css('padding-right', '25px');
		infoOSC.append(_HMTL);
		
	}
}

function scrollOsc() {
  if ( ( ( $(window).scrollTop() > 200) && (deactivate_minimize_osc!=1) ) || manually_minimized ){
	  osc.addClass("scrolled");
    fullBlock_TextContainer.css('margin-bottom', '');
    if (phoneBubble.length > 0) {
      phoneBubble.addClass("scrolled");
      contactBubble.addClass("scrolledPhone");
    } else {
      contactBubble.addClass("scrolled");
    }
    infoOsc.addClass("scrolled");
    portraitOsc.addClass("scrolled");
  } else {
    osc.removeClass("scrolled");
    if(screenWidth < 768){ 
        fullBlock_TextContainer.css('margin-bottom', osc.height());
    }
    if (phoneBubble.length > 0) {
      phoneBubble.removeClass("scrolled");
      contactBubble.removeClass("scrolledPhone");
    } else {
      contactBubble.removeClass("scrolled");
    }
    phoneBubble.removeClass("scrolled");
    infoOsc.removeClass("scrolled");
    portraitOsc.removeClass("scrolled");
  }
}


function minimizeOSC(){
	
	activeOsc(false);
	infoOSC.css('padding-right', '0px');
	
	if(manually_minimized_first){
		fetch(urlServices + "?request=osc_session&deactivate_minimize_osc=0", {

		  method: "GET"

		}).then(function(response) {

			if (response.ok) {
			  console.log('minimizeOSC.ok');
			} else {
			  console.log('minimizeOSC.no');
			}

		});
		manually_minimized_first = false;
	}
	
	
	if($("#minOSC").hasClass("min")){
		$("#minOSC").removeClass("min");
		manually_minimized = false;
		deactivate_minimize_osc=1;
	}else{
		$("#minOSC").addClass("min");
		deactivate_minimize_osc=0;
		manually_minimized = true;
		
		/*$("#minOSC").animate({"opacity":0}, 120, function(){
			//$("#minOSC").remove();

		});*/
	}
	scrollOsc();
}

//function scrollOsc() {
//  if ($(window).scrollTop() > 200) {
//    osc.addClass("scrolled");
//    fullBlock_TextContainer.css('margin-bottom', '');
//    if (phoneBubble.length > 0) {
//      phoneBubble.addClass("scrolled");
//      contactBubble.addClass("scrolledPhone");
//    } else {
//      contactBubble.addClass("scrolled");
//    }
//    infoOsc.addClass("scrolled");
//    portraitOsc.addClass("scrolled");
//  } else {
//    osc.removeClass("scrolled");
//    if(screenWidth < 768){ 
//        fullBlock_TextContainer.css('margin-bottom', osc.height());
//    }
//    if (phoneBubble.length > 0) {
//      phoneBubble.removeClass("scrolled");
//      contactBubble.removeClass("scrolledPhone");
//    } else {
//      contactBubble.removeClass("scrolled");
//    }
//    phoneBubble.removeClass("scrolled");
//    infoOsc.removeClass("scrolled");
//    portraitOsc.removeClass("scrolled");
//  }
//}

function scrolledHeader() {
  if ($(window).scrollTop() > 100 || header.hasClass("fullActive")) {
	if( headerContainer.length > 0 ){
    	headerContainer.addClass("active");
	}
    burgerIcon
      .children()
      .removeClass("whiteBg")
      .addClass("brownBg");
    infoTop
      .children()
      .addClass("brown")
      .removeClass("white");
    infoTopMobile
      .children()
      .addClass("brown")
      .removeClass("white");
    findHomeIcon.css(
      "background-image",
      "url(" + urlDirectory + "images/brown-search.png)"
    );
    searchBlogIcon.css(
      "background-image",
      "url(" + urlDirectory + "images/brown-search.png)"
    );
    $('.phoneHeader a').addClass("brown")
    .removeClass("white");
    phoneIcon.css(
      "background-image",
      "url(" + urlDirectory + "images/phone_header_brown.png)"
    );
    favsIcon.css(
      "background-image",
      "url(" + urlDirectory + "images/brown-favs.png)"
    );
    communityIcon.css(
      "background-image",
      "url(" + urlDirectory + "images/brown-downArrow.png)"
    );
    logoWhite.attr("src", urlDirectory + "images/logo-brown.png");
  } else {
    headerContainer.removeClass("active");

    if (!opened) {
      burgerIcon
        .children()
        .addClass("whiteBg")
        .removeClass("brownBg");
      logoWhite.attr("src", urlDirectory + "images/logo-white.png");
    }

    infoTop
      .children()
      .addClass("white")
      .removeClass("brown");
    infoTopMobile
      .children()
      .addClass("white")
      .removeClass("brown");
    findHomeIcon.css(
      "background-image",
      "url(" + urlDirectory + "images/white-search.png)"
    );
    searchBlogIcon.css(
      "background-image",
      "url(" + urlDirectory + "images/white-search.png)"
    );
    $('.phoneHeader a').addClass("white")
    .removeClass("brown");
    phoneIcon.css(
      "background-image",
      "url(" + urlDirectory + "images/phone_header.png)"
    );
    favsIcon.css(
      "background-image",
      "url(" + urlDirectory + "images/white-favs.png)"
    );
    communityIcon.css(
      "background-image",
      "url(" + urlDirectory + "images/brown-downArrow.png)"
    );
    $(".sub_menu_list").css("margin-top", "70px");
  }

  regionSelect.height(infoTop.height());
}

function resizeBlog() {
  if (screenWidth > 768) {
    $(".blogBody").css("marginTop", header.height() + blogHeader.height());
    $($('.blog_posts_parent .section-blog')[0]).css('margin-top', header.height() + blogHeader.height()); 
  } else {
    $(".blogBody").css(
      "marginTop",
      header.height() + blogHeaderMobile.height()
    );
  }
  resizeBlogPage();
  resizeBannerBlog();
  resizeGalleryBlog();
  resizeColumnsBlog();
  resizemultimediaBlog();
}

function resizeEmpire() {
  screenWidth = $(window).width();
  screenHeight = $(window).height();
  resizedMenu = false;
  resizeMainHeader();
  scrolledHeader();
  scrollOsc();
  resizePopup();
  resizePrincipalblock();
  setGallery();
  resizeFullBlock();
  resizeTextBlock();
  resizeCommunitiesblock();
  resizeCardBlock();
  resizeSearch();
  resizeSplitBlock();
  resizeColumnsBlock();
  resizeMaps();
  resizeMenu();
  resizeBlog();
  resizeListing();
  resizePresale();
  resizeAmenitiesLisitngs();
  if(opened){
    closeMenu(); 
  }

  setTimeout(resize_video(), 200);
  setTimeout(function() {
    contGalery_fullBlock
      .find(".slick-list")
      .height(contGalery_fullBlock.height());
    contGalery_fullBlock.find(".slick-track").height(fullBlock.height());
    communitiesBlock_gallery
      .find(".slick-list")
      .height(communitiesBlock_galleryContainer.height());
    communitiesBlock_gallery
      .find(".slick-track")
      .height(communitiesBlock_galleryContainer.height());
    amenitiesBlock_contGallery
      .find(".slick-track")
      .height(amenitiesBlock_contGallery.height());
    contImg_splitNew_block
      .find(".slick-track")
      .height(contImg_splitNew_block.height());
    galleryBlog.find(".slick-track").height(galleryBlog.height());

    if (screenWidth > 768) {
      contText_splitNew_block
        .find(".slick-list")
        .height(contText_splitNew_block.height());
    }

    if (screenWidth > 1025) {
      cardsBlock_gallery
        .find(".slick-track")
        .height(cardsBlock_gallery.height());
    } else {
      cardsBlock_gallery
        .find(".slick-track")
        .height(cardsBlock_gallery.height());
    }

    contGallery_featuredBlock.find(".slick-list").css("overflow", "visible");
    galleryList.find(".slick-track").height(galleryList.height());
  }, 100);

  resizeListingsPage();
  resizeCommunitiesPage();
  resizeDecor();
  resizeLandDev();
  /*sebas quick */
  resizequickMove();
  /*fin sebas*/

  //loadFavPage();
	resizeFavs();
  resizePano();
	

  resizeQuizResultsBanner();
  animateResults();
}

function resizePrincipalblock() {
  principalBlock.width(screenWidth);
  principalBlock.height(screenHeight);
}

function resizeFullBlock() {
  fullBlock.width(screenWidth);
  fullBlock.innerHeight(screenHeight); 
  fullBlock.each(function() {
    $(this)
      .find(".full_block_child")
      .height(
        $(this)
          .find(".contGalery_fullBlock")
          .height()
      );
  });
}

function resizeTextBlock() {
  section_textBlock.width(screenWidth);
  textBlock_block.height("auto");
}

function resizeCommunitiesblock() {
  communitiesblock.width(screenWidth);
  if(screenWidth < 768){
    communitiesblock.height($('.amenitiesBlock_contText').innerHeight() + $('.amenitiesBlock_contGallery').innerHeight());
  }
	
	var TitleElements = $(".communityresults");		
	
	if( TitleElements.length > 0 ){
		
		TitleElements.each( function(){

			var height = $(this).height();

			if ( height > 31 ){
				
				//console.log('> 1 row');
				$(this).css('line-height','1');
				
			}else{
				
				//console.log('1 row');
				$(this).css('line-height','1.5');
				
			}

		});
		
	}
}

function resizeCardBlock() {
  cards_block.width(screenWidth);

  if (screenWidth > 1025) {
    cardsBlock_gallery.height(cards_block.height() * 0.8);
    cardsBlock_container.css("padding", "5% 0");
  } else {
    contFirstCardOut.height("auto");
    cardsBlock_gallery.height(screenHeight * 0.7);
    cardsBlock_gallery.find(".slick-track").height(cardsBlock_gallery.height());
    cards_block.height(
      contFirstCardOut.outerHeight() + cardsBlock_gallery.height()
    );
  }

  contText_cardBlock
    .find(".slick-track")
    .height($(".contText_cardBlock").height());
}

function resizeSplitBlock() {
  stopTime();

  if (screenWidth > 768) {
    $(".textGallerySplitblock").slick("slickSetOption", "adaptiveHeight", null);
    $(".splitNew-block").each(function(){
      if($(this).find('.imageGallerySplitBlock').data('autoplay') == 1 ){
        $(".textGallerySplitblock").slick("slickPlay");
      }
    });
    contImg_splitNew_block.height(contImg_splitNew_block.width());
    contText_splitNew_block.height(contImg_splitNew_block.height());
    contAll_splitNew_block.height(contImg_splitNew_block.height());
    $(".splitTextElement").height(contText_splitNew_block.height());
    $(".splitTextElement")
      .find(".outer")
      .height(contAll_splitNew_block.height());
    splitNew_block.height(contAll_splitNew_block.innerHeight());
  } else {
    $(".splitTextElement").css({
      height: "auto",
      "min-height": screenHeight / 2
    });
    $(".textGallerySplitblock").slick("slickSetOption", "adaptiveHeight", true);
    $(".textGallerySplitblock").slick("slickPause");
    $(".imageGallerySplitBlock").slick("slickPause");
    contImg_splitNew_block.height(screenHeight / 2);
    $(".splitTextElement")
      .find(".outer")
      .height("auto");
    $(".splitTextElement").each(function(e) {
      var heightDescription = $(this)
        .find(".splitDescriptionContainer")
        .height();

      if (heightDescription < $(this).height()) {
        $(this)
          .find(".outer")
          .height($(this).height());
      }
    });
    setTimeSplit = setTimeout(function() {
      splitNew_block.each(function() {
        var splitId = $(this).attr("id");
        var imgSpHeight = $(this)
          .find("#" + splitId + "-image")
          .height();
        var txtSpHeight = $(this)
          .find("#" + splitId + "-texto")
          .innerHeight();
        var totalSpHeight = imgSpHeight + txtSpHeight;
        $(this)
          .find(".splitContainer")
          .height(totalSpHeight);
        $("#" + splitId).height(
          $(this)
            .find(".splitContainer")
            .innerHeight()
        );
      });
    }, 200);
  }
}

function resizeAmenitiesLisitngs() {
  setAspectratio(imgAmenitiesOverview, "16");
  listAmenitiesOverview.innerHeight(imgAmenitiesOverview.height());
  overviewImage.css("max-height", imgAmenitiesOverview.height());
}

function resizeColumnsBlock() {
  var highHeight = [];
  setTimeout(function() {

//    imageConateinerColumns.height(imageConateinerColumns.width());
	 [...imageConateinerColumns].forEach(function(image){
      if($(image).hasClass('size_large')){
        $(image).height(imageConateinerColumns.width());
      }
      if($(image).hasClass('size_medium')){
        setAspectratio($(image), '4');
      }
      if($(image).hasClass('size_small')){
        $(image).css({'width': '60%', 'margin': 'auto'});
        $(image).height($(image).width());
      }
    });
	  
      infoTextColumn.height("auto");
	  
    if (screenWidth > 768) {
      infoTextColumn.each(function() {
        highHeight.push($(this).height());
      });
      highHeight = highHeight.sort().reverse();
      infoTextColumn.height(highHeight[0]);
	  console.log("--> " + highHeight[0])
    } else {
      infoTextColumn.height("auto");
    }
	  
  }, 100);
}

var listview, Mapview;
listview = $('.listview');
Mapview = $('.Mapview');

function resizeSearch() {
  $('.unitsAvailable').unbind();
  $('.unitsAvailable').click(showUnitsAvailable);
  setAspectratio(imageSearch, "4");
  cardSearch.css('min-height', imageSearch.height());
  if(screenWidth < 768){
      if(listview.hasClass('active') || Mapview.hasClass('active')){
      }else{
        if($('#searchMapSearch').length > 0){
          listinglist.addClass('active');
          communityFilters.addClass('active');
          listview.addClass('active');
          cardSearch.height('auto');
        }else if($('#searchMap')){
          Mapview.addClass('active');
        }
      }
  }
}
// sebas
function closeNoResults(){
  $('.noResultsMap').css({
    'top': '0',
    'opacity': '0'
  })
  setTimeout(function(){
    $('.noResultsMap').css('display', 'none');
  }, 300)
}
var noResultsLink;
function noResPopup(){
  var noResPop = `<div class="noResultsPopup noResultsMap">
  <div class="outer">
  <div class="middle">
  <div class="close" onclick="closeNoResults();"></div>
  <div class="InfoNoResults">
    <p class="text_medium boldFont">NO RESULTS FOUND!</p>
    <p class="text_small">Sorry, we couldn't find any results for your search!</p>
  </div>
  ${noResultsLink == "" ? '' : `<p>Can't find what you are looking for?</p> 
  <div class="cta_principal_block">
    <div class="btnContainer">
      <a class="ctaUnderline ctaFont text_smallLarge" target="_self" href="${noResultsLink}" style="color:#2e2624">contact us</a><div class="ctaUnderlineLine" style="background-color:#2e2624"></div>
    </div>
  </div>`}
  </div>
  </div>
</div>`
  if($('.noResultsPopup').length > 0){
    $('#searchMapSearch').append(noResPop);
  }
}

//fin sebas

function resizeMaps() {
  if (mapCommunity.length > 0) {
    if (screenWidth > 768) {
      mapCommunity.height((mapCommunity.width() * 9) / 16);
    } else {
      mapCommunity.height(mapCommunity.width() - mapCommunity.width() / 2);
    }
    if(mapCommunity.hasClass('map')){
    }else{  
      centerMap(mapCommunity);
    }
  }

  if (map_communities.length > 0) {
    if (screenWidth > 768) {
      map_communities.height((map_communities.width() * 9) / 16);
    } else {
      map_communities.height(map_communities.width());
    }
    if(map_communities.hasClass('map')){
    }else{ 
      centerMap(map_communities);
    }
  }
}

function resizeGalleryBlog() {
  if (galleryBlog.hasClass("smallGalleryBlog")) {
    galleryBlog.width(containerBlog.width() * 0.7);
  } else {
    galleryBlog.width(containerBlog.width());
  }

  galleryBlog.height((galleryBlog.width() * 9) / 16);
}

function resizeColumnsBlog() {
  if (screenWidth < 768) {
    $(".columnsBlogContainer")
      .not(".slick-initialized")
      .slick({
        dots: false,
        arrows: true,
        prevArrow: '<div class="arrow-prev"></div>',
        nextArrow: '<div class="arrow-next"></div>',
        infinite: false,
        slidesToShow: 1.1,
        swipeToSlide: true,
        slide: ".colummnBlog"
      });
  } else {
    deconstructsGallery(".columnsBlogContainer");
  }
}

function activeFirstExploreArea(){
  $(elementArea[0]).trigger('click'); 
}

var contMultimediaFull;
contMultimediaFull = $(".contMultimediaFull");

var bannerGeneral_block = $("#bannerGeneral-block");

function resizeBlogPage() {
  if (screenWidth < 768) {
    bannerGeneral_block.innerHeight(screenHeight * 0.6);
    $('.imageStories').each(function(){
      setAspectratio($(this), "16");
    });
    $(".imgFristItemThree").each(function(){
      setAspectratio($(this), "4");
    });
    $(".contItemsMosaic")
      .not(".slick-initialized")
      .slick({
        dots: false,
        arrows: true,
        prevArrow: '<div class="arrow-prev"></div>',
        nextArrow: '<div class="arrow-next"></div>',
        infinite: false,
        slidesToShow: 1.1,
        swipeToSlide: true
      });
      $(".imageMosaic").each(function(){
        setAspectratio($(this), "4");
      })
  } else {
    $(".imageStories").height($(".imageStories").width() * 1.3);
    if($(".contItemsMosaic").hasClass('slick-initialized')){
      $(".contItemsMosaic").slick('unslick');
    }
    $(".imageMosaic").each(function(){
      setAspectratio($(this), "4");
    })
  }
}

function resizemultimediaBlog() {
  $(".contMultimediaFull").each(function() {
    if ($(this).hasClass("cover")) {
      setAspectratio($(this), "16");
    } else {
      $(this).css("height", "auto");
    }
    $(this).css("margin", "25px 0");
  });

  $("contsplitMultimediaSmall").each(function() {
    $(this).height(
      $(this)
        .find(".parentSplitContent")
        .height()
    );
  });
}

function setGallery() {
  $(".relatedBlogs")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      dots: false,
      arrows: true,
      swipeToSlide: true,
      slide: ".itemMosaic",
      prevArrow: '<div class="arrow-prev"></div>',
      nextArrow: '<div class="arrow-next"></div>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2.7
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1.5
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.2
          }
        }
      ]
    });

  $(".galleryBlog").each(function() {
    var blogGalId = $(this).attr("id");
    $("#" + blogGalId)
      .not(".slick-initialized")
      .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: $(this).data("dots") == 1 ? true : false,
        arrows: $(this).data("arrows") == 1 ? true : false,
        prevArrow: '<div class="arrow-prev"></div>',
        nextArrow: '<div class="arrow-next"></div>',
        customPaging: function customPaging(slider, i) {
          return '<a class="dotEmpire" id="item-' + i + '" role="button"></a>';
        }
      });
  });

  $(".splitNew-block").each(function() {
    var imgGalId = $(this)
      .find(".imageGallerySplitBlock")
      .attr("id");
    var txtGalId = $(this)
      .find(".textGallerySplitblock")
      .attr("id");
    $("#".concat(imgGalId))
      .not(".slick-initialized")
      .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: "#" + txtGalId,
        dots: $(this).find(".imageGallerySplitBlock").data("dots") == 1 ? true : false,
        arrows: $(this).find(".imageGallerySplitBlock").data("arrows") == 1 ? true : false,
        prevArrow: '<div class="arrow-prev"></div>',
        nextArrow: '<div class="arrow-next"></div>',
        autoplay : $(this).find(".imageGallerySplitBlock").data("autoplay") == 1 ? true : false,
        autoplaySpeed: 8000,
        customPaging: function customPaging(slider, i) {
          return '<a class="dotEmpire" id="item-' + i + '" role="button"></a>';
        }
      });
    $("#".concat(txtGalId))
      .not(".slick-initialized")
      .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        fade: true,
        asNavFor: "#" + imgGalId,
        dots: false,
        arrows: false,
        prevArrow: '<div class="arrow-prev"></div>',
        nextArrow: '<div class="arrow-next"></div>',
        customPaging: function customPaging(slider, i) {
          return '<a class="dotEmpire" id="item-' + i + '" role="button"></a>';
        }
      });
  });

  $(".contGalery_fullBlock").each(function() {
    $(this)
      .not(".slick-initialized")
      .slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots:
          $(this)
            .parent()
            .data("dots") == 1
            ? true
            : false,
        arrows:
          $(this)
            .parent()
            .data("arrows") == 1
            ? true
            : false,
        prevArrow: '<div class="arrow-prev"></div>',
        nextArrow: '<div class="arrow-next"></div>',
        customPaging: function customPaging(slider, i) {
          return '<a class="dotEmpire" id="item-' + i + '" role="button"></a>';
        }
      });
  });

  $(".cardsBlock_gallery")
    .not(".slick-initialized")
    .slick({
      dots: false,
      arrows: true,
      prevArrow: '<div class="arrow-prev"></div>',
      nextArrow: '<div class="arrow-next"></div>',
      infinite: false,
      speed: 300,
      slidesToShow: 3.2,
      swipeToSlide: true,
      slide: ".card_cardsBlock",
      customPaging: function customPaging(slider, i) {
        return '<a class="dotEmpire" id="item-' + i + '" role="button"></a>';
      },
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2.7
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1.5,
            slide: ".imageCard"
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.2,
            slide: ".imageCard"
          }
        }
      ]
    });

  $(".communitiesBlock_gallery")
    .not(".slick-initialized")
    .slick({
      dots: false,
      arrows: true,
      prevArrow: '<div class="arrow-prev"></div>',
      nextArrow: '<div class="arrow-next"></div>',
      infinite: false,
      speed: 300,
      slidesToShow: 3.8,
      swipeToSlide: true,
      customPaging: function customPaging(slider, i) {
        return '<a class="dotEmpire" id="item-' + i + '" role="button"></a>';
      },
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3.5
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1.5
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.2
          }
        }
      ]
    });

  $(".contGallery_featuredBlock")
    .not(".slick-initialized")
    .slick({
      dots: false,
      arrows: true,
      prevArrow: '<div class="arrow-prev"></div>',
      nextArrow: '<div class="arrow-next"></div>',
      infinite: false,
      speed: 300,
      slidesToShow: 3.5,
      swipeToSlide: true,
      customPaging: function customPaging(slider, i) {
        return '<a class="dotEmpire" id="item-' + i + '" role="button"></a>';
      },
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2.5
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2.2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.8
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1.1
          }
        }
      ]
    });

  $(".galleryList")
    .not(".slick-initialized")
    .slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      arrows: true,
      prevArrow: '<div class="arrow-prev"></div>',
      nextArrow: '<div class="arrow-next"></div>'
    });

  if (screenWidth < 768) {
    $(".amenitiesBlock_contGallery")
      .not(".slick-initialized")
      .slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1.2,
        slidesToScroll: 1,
        prevArrow: '<div class="arrow-prev"></div>',
        nextArrow: '<div class="arrow-next"></div>'
      });
  } else {
    deconstructsGallery(".amenitiesBlock_contGallery");
  }

  $('.slick-slider').each(function(){
    $(this).find('.slick-dots').css({
      "margin-left": -$(this).find('.slick-dots').width() / 2 
    });
  });
  $(".communitiesBlock_gallery").on("breakpoint", function(e) {
    if (communitiesBlock_communityContainer.not(".lazy")) {
      communitiesBlock_communityContainer.addClass("lazy");
      lazyLoad();
    }
  });
}

function resizeMenu() {
  if (screenWidth > 1024) {
    mainMenu.css({
      "box-sizing": "border-box",
      "padding-left": $(".container").offset().left,
      width: mainMenu.width() + $(".container").offset().left
    });
    mainMenu.css({
      left: "0"
    });
    resizedMenu = true;
  }else if(screenWidth > 768){
      mainMenu.css({
        "box-sizing": "border-box",
        "padding-left": $(".container").offset().left,
        'width': screenWidth/2});
      communityTab.css('width', screenWidth/2);
      homebuyerTab.css('width', screenWidth/2);
  }else {
    mainMenu.css({
      "padding-left": 0,
      width: screenWidth
    });
    resizedMenu = true;
  }
}

var communitiesItemHeight;

function openMenu() {
    if(screenWidth > 768){
        menuList.css("margin-top", $('.header').height()*1.2); 
    }else{
        menuList.css("margin-top", $('.header').height()*0.5); 
    }
  if (!opened) {
    $('body, html').css('overflow', 'hidden');
    if (searchOpened) {
      openSearch();
    }

    if (screenWidth < 768) {
      adjustMenu = false;
      header.addClass("fullActive");
      resizeEmpire();
    } else {
      burgerIcon
        .children()
        .removeClass("whiteBg")
        .addClass("brownBg");
      logoWhite.attr("src", urlDirectory + "images/logo-brown.png");

      if (!resizedMenu) {
        resizeMenu();
      }
    }

    burgerIcon.addClass("open");
    menuClose.addClass("open");
    menuContanier.css({"display":"block", "height": screenHeight - cookiesContainer.height(), 'top': cookiesContainer.height()});
    mainMenu.css("left", -mainMenu.innerWidth());
    setTimeout(function() {
      menuBackground.css({
        opacity: "1"
      });
      mainMenu.css({
        left: "0%",
        opacity: "1",
        transition: "all 0.3s ease"
      });
    }, 100);
    if (screenWidth > 768) {
      setAspectratio(communityPreview, "4");
      communityItem.height(communityPreview.height());
    } else {
      setAspectratio(communityMenuPreview, "4");
      communityItem.height(communityMenuPreview.height());
    }
    communitiesItemHeight = communityItem.height();
    if (screenWidth > 768) {
    }
    if($('.communityMenu').length > 0){
      $('.communityMenu').trigger('click'); 
    }
    opened = true;
  } else {
    closeMenu();
  }
}

function closeMenu() {
  adjustMenu = true;
  opened = false;

  if($('.communityMenu').hasClass('active') > 0){
    $('.communityMenu').trigger('click');  
  } 
  
  $('body, html').css('overflow', 'visible');
  if (screenWidth < 768) {
    //if($('#primary').hasClass('communities') || ( header.hasClass("neverWhite") ) ){
	if( ($('#primary').length<=0 ) || ($('#primary').hasClass('communities'))){

    }else{
      header.removeClass("fullActive");    
    }
    scrolledHeader();
  } else {
    burgerIcon
      .children()
      .removeClass("brownBg")
      .addClass("whiteBg");
    logoWhite.attr("src", urlDirectory + "images/logo-white.png");
    scrolledHeader();
  }

  burgerIcon.removeClass("open");
  menuClose.removeClass("open");
  menuBackground.css("opacity", "0");
  mainMenu.css({
    left: -mainMenu.innerWidth(),
    opacity: "0"
  });
  communityTab.css("left", -mainMenu.innerWidth());
  homebuyerTab.css("left", -mainMenu.innerWidth());
  setTimeout(function() {
    menuContanier.css("display", "none");
  }, 300);
  submenu.each(function() {
    var item = $(this).attr("id");
    $("#" + item + "_submenu").css("left", -mainMenu.innerWidth());
    $(this).removeClass("active");
  });
}

function openSubMenu(nameList) {
  nameList = $(this).attr("id");

  if (screenWidth > 768) {
    if ($("#" + nameList + "_submenu").length > 0) {
      if ($("#" + nameList).attr("submenuOpened") == "true") {
        $("#" + nameList).removeClass("active");
        $("#" + nameList).attr("submenuOpened", "false");
        $("#" + nameList + "_submenu").css("left", "0%");
      } else {
        submenu.each(function() {
          var item = $(this).attr("id");
          $("#" + item + "_submenu").css("left", "0%");
          $(this).removeClass("active");
          $(this).attr("submenuOpened", "false");
        });
        $("#" + nameList).addClass("active");
        $("#" + nameList + "_submenu").css("left", mainMenu.innerWidth())
        ;
        $("#" + nameList).attr("submenuOpened", "true");
      }
    } else {
      submenu.each(function() {
        var item = $(this).attr("id");
        $("#" + item + "_submenu").css("left", "0%");
        $(this).removeClass("active");
      });
    }
  } else {
    console.log("menos 768");

    if ($("#" + nameList).hasClass("exploreSubMenu")) {
      openSubmenuExploreMobile(nameList);
    } else {
      openSubmenuMobile(nameList);
    }
  }
}

function openSelect() {
  if (community.data("open") == "true") {
    community.data("open", "false");
    community.stop().animate(
      {
        height: "40px"
      },
      300
    );
    regionList.css({
      top: "-120px",
      opacity: 0
    });
    communityIcon.css("transform", "rotate(0deg)");
    setTimeout(function() {
      regionList.css({
        display: "none"
      });
    }, 300);
  } else {
    if (screenWidth > 768) {
      regionList.css({
        display: "block",
        width: "90%",
        "margin-left": "10%"
      });
    } else {
      regionList.css({
        display: "block",
        width: "95%",
        "margin-left": "5%"
      });
    }

    setTimeout(function() {
      community.data("open", "true");
      community.stop().animate(
        {
          height: community.height() + regionList.height()
        },
        300
      );
      regionList.css({
        top: "0px",
        opacity: 1
      });
      communityIcon.css("transform", "rotate(180deg)");
    }, 100);
  }
}

function sendFavs() {
	
 	var To = $('#emailToInput').val().split(",");
	var From = $('#yourEmailInput').val();
	
	if( validateEmail(From) ){
		
		if( To.length <= 3 ){
		
			var validMail = true;
			$.each( To, function(ind,elem){			
				if( ! validateEmail(elem) ){				
					validMail = false;				
				}		
			});

			if( validMail ){
				
				if($("#favCheckbox").is(':checked')){				

					var form = new FormData(document.getElementById('favouritesForm'));
					var urlToFetch = $("#favouritesForm").attr('action');

					fetch(urlToFetch, {
						method: "POST",
						body: form
					})
					.then(res => res.text())
					.catch(error => console.error('Error:', error))
					.then(function(response){
						console.log('Success:', response);

						if( response == "OK" ){

							$("#textSuccesfully").html("Form submitted successfully");
							setTimeout(function(){
									$("#textSuccesfully").html("");
									closeShareFavs();
									},2000);
							$('#favouritesForm').trigger("reset");

						}else{

							$("#errorCapcha").html(response);
							setTimeout(function(){$("#errorCapcha").html("");},2000);

						}

					});		
					
				}else{
					
					$("#errorCheckbox").html("Required field");
					setTimeout(function(){$("#errorCheckbox").html("");},1000);
				}

			}else{

				$("#errorEmailTo").html("One or more invalid emails.");
				setTimeout(function(){$("#errorEmailTo").html("");},1000);

			}
			
		}else{
			
			$("#errorEmailTo").html("3 email addresses max.");
			setTimeout(function(){$("#errorEmailTo").html("");},1000);
			
		}
		
				
	}else{
		
		$("#errorEmailFrom").html("Invalid Mail.");		
		setTimeout(function(){$("#errorEmailFrom").html("");},1000);
		
	}
	
}

function deconstructsGallery(gallery) {
  if ($(gallery).hasClass("slick-initialized")) {
    $(gallery).slick("unslick");
  }
}

function lazyLoad() {
  var lazyImages = [].slice.call($(".lazy"));
  var maps = [].slice.call($(".map"));
  var lazy_img = [].slice.call($(".lazyImg"));
  var active = false;

  if (active === false) {
    active = true;
    setTimeout(function() {
      lazyImages.forEach(function(lazyImage) {
        if (
          lazyImage.getBoundingClientRect().top <= window.innerHeight &&
          lazyImage.getBoundingClientRect().bottom >= 0 &&
          getComputedStyle(lazyImage).display !== "none"
        ) {
          if ($(lazyImage).data("lazyimagemobile") !== undefined) {
            if (screenWidth < 768) {
              if ($(lazyImage).data("lazyimagemobile") !== "") {
                $(lazyImage).css(
                  "background-image",
                  "url(" + lazyImage.dataset.lazyimagemobile + ")"
                );
              } else {
                $(lazyImage).css(
                  "background-image",
                  "url(" + lazyImage.dataset.lazyimage + ")"
                );
              }
            } else {
              $(lazyImage).css(
                "background-image",
                "url(" + lazyImage.dataset.lazyimage + ")"
              );
            }
          } else {
            $(lazyImage).css(
              "background-image",
              "url(" + lazyImage.dataset.lazyimage + ")"
            );
          }

          $(lazyImage).removeClass("lazy");
          lazyImages = lazyImages.filter(function(image) {
            return image !== lazyImage;
          });

          if (lazyImages.length === 0) {
          }
        }
      });
      active = false;
    }, 200);
    maps.forEach(function(map) {
      if (
        map.getBoundingClientRect().top <= window.innerHeight &&
        map.getBoundingClientRect().bottom >= 0 &&
        getComputedStyle(map).display !== "none"
      ) {
        $(map).removeClass("map");
        render_map($(map));
        if($(map).attr('id') == "map_explore_area"){ 
          activeFirstExploreArea();  
        }
      }
    });
    setTimeout(function() {
      lazy_img.forEach(function(imageLazy) {
        if (
          imageLazy.getBoundingClientRect().top <= window.innerHeight &&
          imageLazy.getBoundingClientRect().bottom >= 0 &&
          getComputedStyle(imageLazy).display !== "none"
        ) {
          $(imageLazy).attr("src", imageLazy.dataset.lazyimage);
          $(imageLazy).removeClass("lazyImg");
          lazy_img = lazy_img.filter(function(image) {
            return image !== imageLazy;
          });

          if (lazy_img.length === 0) {
          }
        }
      });
      active = false;
    }, 100);
  }
}

function loadTypeCommunities() {
  communityType1.removeClass("active");
  communityType2.removeClass("active");
  $(this).addClass("active");
}

function openSearch() {
  if (!searchOpened) {
    adjustMenu = false;
    $("body").css("overflow", "hidden");
    header.addClass("fullActive");
    resizeEmpire();
    search.css({
      display: "block",
      top: header.height(),
      height: screenHeight - header.height()
    });
    setTimeout(function() {
      searchFilters.css({
        opacity: "1",
        top: "0"
      });
      searchBG.css("opacity", "1");
    }, 100);   
    findHomeIcon.css('background-image', 'url('+ urlDirectory +'images/CLOSE-BROWN.png)');
    searchOpened = true;
  } else {
    adjustMenu = true; 
    $("body").css("overflow", "visible");
    resizeEmpire();
    searchFilters.css({
      opacity: "0",
      top: "-450px"
    });
    searchBG.css("opcity", "0");
    setTimeout(function() {
      search.css("display", "none");
    }, 150);
    searchOpened = false;
  }
}

function filterMenu(data_search) {
  if (data_search != "") {
    $(".communityItem").removeClass("active");
    $(".communityItem").css("height", 0);

    if (screenWidth > 768) {
      $('[data-desktopfilter*="' + data_search + '"]').addClass("active");
      $('[data-desktopfilter*="' + data_search + '"]').css(
        "height",
        communitiesItemHeight
      );
    } else {
      $('[data-mobilefilter*="' + data_search + '"]').addClass("active");
      $('[data-mobilefilter*="' + data_search + '"]').css(
        "height",
        communitiesItemHeight
      );
      setTimeout(function() {
        autoHeight($("#communities-dropdown"), 300);
      }, 120);
    }
  } else {
    $(".communityItem").addClass("active");
    $(".communityItem").css("height", communitiesItemHeight);
    setTimeout(function() {
      autoHeight($("#communities-dropdown"), 300);
    }, 120);
  }
}

function openSubmenuMobile(element) {
  var idSubmenu = $("#" + element).attr("id");
  subMenuMobile = $("#" + idSubmenu + "-dropdown");

  if (subMenuMobile.data("open") === "false" || subMenuMobile.height() === 0) {
    subMenuMobileGlobal.stop().animate(
      {
        height: "0"
      },
      500
    );
    subMenuMobileGlobal.data("open", "false");
    autoHeight(subMenuMobile, 500);
    subMenuMobile.data("open", "true");
    $(".submenu").removeClass("active");
    $("#" + element).addClass("active");
  } else {
    subMenuMobile.stop().animate(
      {
        height: "0"
      },
      500
    );
    subMenuMobile.data("open", "false");
    $("#" + element).removeClass("active");
  }
}

function openSubmenuExploreMobile(element) {
  var idSubmenu = $("#" + element).attr("id");
  subMenuMobile = $("#" + idSubmenu + "-dropdown");
  var parentNode = $("#" + element)
    .parent()
    .parent()
    .parent()
    .parent();

  if (subMenuMobile.data("open") === "false" || subMenuMobile.height() === 0) {
    $(".exploreSubMenu")
      .next()
      .stop()
      .animate(
        {
          height: "0"
        },
        500
      );
    $(".exploreSubMenu")
      .next()
      .data("open", "false");
    autoHeight(subMenuMobile, 300);
    setTimeout(function() {
      autoHeight(parentNode, 200);
    }, 300);
    subMenuMobile.data("open", "true");
    $(".exploreSubMenu")
      .next()
      .removeClass("active");
    $("#" + element).addClass("active");
  } else {
    subMenuMobile.stop().animate(
      {
        height: "0"
      },
      300
    );
    setTimeout(function() {
      autoHeight(parentNode, 200);
    }, 300);
    subMenuMobile.data("open", "false");
    $("#" + element).removeClass("active");
  }
}

function autoHeight(element, time) {
  var curHeight = element.height();
  var autoHeight = element.css("height", "auto").height();
  element.height(curHeight);
  element.stop().animate(
    {
      height: autoHeight
    },
    time
  );
}

function autoWidth(element, time) {
  var curWidth = element.width();
  var autoWidth = element.css("width", "auto").width();
  element.width(curWidth);
  element.stop().animate(
    {
      width: autoWidth
    },
    time
  );
}

function resize_video() {
  if ($(".videoPlayer").length > 0) {
    var widthV = screenWidth;
    var heightV = $(".contGalery_fullBlock").height();
    var aspectRatioVP = widthV / heightV;
    var aspectRatio169 = 1920 / 1080;

    if (aspectRatio169 >= aspectRatioVP) {
      $(".video-bg").height(heightV);
      var widthVP = Math.round(heightV * aspectRatio169);
      var offset = widthVP - widthV;
      $(".video-bg").width(widthVP);
      $(".video-bg").css({
        left: -(offset / 2),
        top: 0
      });
    } else {
      $(".video-bg").width(widthV);
      var heightVP = Math.round(widthV / aspectRatio169);
      $(".video-bg").height(heightVP);
      var offset = heightVP - heightV;
      $(".video-bg").css({
        top: -(offset / 2),
        left: 0
      });
    }
  }
}

jQuery(function() {
  if ($(".videoPlayer").length > 0) {
    var onVideoPlayerReady = function onVideoPlayerReady(event) {
      videoPlayer.playVideo();
    };

    resize_video(); // Youtube player

    window.videoPlayer;

    window.onYouTubeIframeAPIReady = function() {
      var videoPlayerId = $(".videoPlayer").attr("data-videoid");
      window.videoPlayer = new YT.Player("videoPlayer", {
        height: "1080",
        width: "1920",
        videoId: videoPlayerId,
        playerVars: {
          controls: 0,
          autoplay: 1,
          mute: 1,
          loop: 1,
          showinfo: 0,
          modestbranding: 1
        },
        events: {
          onReady: onVideoPlayerReady,
          onStateChange: onVideoPlayerReady
        }
      });
    };
  }
});

function stopTime() {
  clearTimeout(setTimeSplit);
}

function formActions(action) {
  if (action == "clear") {
    searchForm.trigger("reset");
  } else if (action == "send") {
    let preloadSearch = '<div class="preloaderContainer"><div class="preloader"></div></div>';
    searchFilters.css({'top': '-450px', 'opacity': '0'});
    $('.searchBG').css({'opacity': '0', 'height': '0%'});
    $('#searchHeader').append(preloadSearch);
    searchForm.submit();
  }
}

function moreFilters() {
  if (!moreFilterOpened) {
    autoHeight(moreFilterscontent);
    $(".moreFilters .downBrownArrow").css({
      transform: "rotate(180deg)",
      transition: "all 0.3s ease"
    });
    moreFilterOpened = true;
  } else {
    $(".moreFilters .downBrownArrow").css({
      transform: "rotate(0deg)",
      transition: "all 0.3s ease"
    });
    moreFilterscontent.stop().animate(
      {
        height: "0"
      },
      500
    );
    moreFilterOpened = false;
  }
}

function changeRegion(url) {
  let preloadReg = '<div class="preloaderContainer"><div class="preloader"></div></div>';
  $('.header').append(preloadReg);
  var regionID = url.split("|")[1];
  setCookies("region_ID", regionID);
  location = url.split("|")[0];
}

function resizePopup(){
    if(popupContent.length > 0){ 
        popupContent.height(infoPopup.height());
        //$('body, html').css('overflow', 'hidden'); 
    }
}

function popUp(region) {
  if (region != "") {
    setCookies("region_ID", region);
  }
  $(".popupBg").css({
    opacity: "0",
    transition: "all 0.3s ease"
  });
  $(".popupContent").css({
    top: "-250px",
    opacity: "0",
    transition: "all 0.3s ease"
  });
  setTimeout(function() {
    $(".popUpContainer").css("display", "none");
  }, 350);
  $('body, html').css('overflow', 'visible');
}

function goToSection(idSection) {
  if (_typeof(idSection) === "object") {
    idSection = $(idSection).attr("id");
  }

  var positionSection = $("#" + idSection).offset().top - 60;
  $("html, body").animate(
    {
      scrollTop: positionSection
    },
    1000
  );
}

function scrollToOtherPage() {
  if (window.location.hash) {
    var hash = window.location.hash.split("-")[1];
    if (hash[0] != "#goto") {
      window.location.hash = "";
      goToSection(hash);
    }
  }
}
//
//function addFavsLocalStorage() {
//  var favs;
//  var fav = $(this).attr("id");
//
//  if ($(this).hasClass("ctaFavFull")) {
//    removeFavsLocalStorage(fav);
//  } else {
//    favs = getFavsLocalStorage();
//    favs.push(fav);
//    localStorage.setItem("favourites", JSON.stringify(favs));
//    $(this).addClass("ctaFavFull");
//    getFavsLocalStorage();
//  }
//}
//
//function removeFavsLocalStorage(id) {
//  var favs, deletedFav;
//  deletedFav = id;
//  favs = getFavsLocalStorage();
//  favs.forEach(function(id, index) {
//    if (deletedFav === id) {
//      favs.splice(index, 1);
//    }
//  });
//  localStorage.setItem("favourites", JSON.stringify(favs));
//  $("#" + id).removeClass("ctaFavFull");
//  getFavsLocalStorage();
//}
//
//function getFavsLocalStorage() {
//  var favs;
//
//  if (localStorage.getItem("favourites") === null) {
//    favs = [];
//  } else {
//    favs = JSON.parse(localStorage.getItem("favourites"));
//  }
//
//  $(".favs .infoTopText").text("(" + favs.length + ")");
//  return favs;
//}
//
//function loadFavsLocalStorage() {
//  getFavsLocalStorage();
//  var favs = getFavsLocalStorage();
//  favs.forEach(function(value, index) {
//    $("#" + favs[index]).addClass("ctaFavFull");
//  });
//}

function addFavsLocalStorage() {
  var favs;
  var fav = $(this).attr("id");
	var nameFav = $(this).data("name");
	var typeFav = $(this).data("type");
	var currUrl = window.location.href;
	var addFav = "add fav "+typeFav;
  if ($(this).hasClass("ctaFavFull")) {
	  addFav = "remove fav "+typeFav;
    removeFavsLocalStorage(fav);
  } else {
    favs = getFavsLocalStorage();
    favs.push(fav);
    localStorage.setItem("favourites", JSON.stringify(favs));
    $(this).addClass("ctaFavFull");
    getFavsLocalStorage();
  }
	
	//_gaq.push(['_trackEvent','favourites-staging',addFav,currUrl,fav+" - "+nameFav]);	
	/*console.log("_trackEvent: " + addFav);
	console.log("_trackEvent: " + currUrl);
	console.log("_trackEvent: " + fav+" - "+nameFav);*/
	triggerGaEvent(addFav,fav+" - "+nameFav, 0);
	
}

var isLive = true;

function triggerGaEvent(_eventCategory, _eventType, _num){
	var currUrl = window.location.href;
	if(GaLoaded){
		console.log("triggering event");
		console.log("_eventCategory: " + _eventCategory);
		console.log("_eventType: " + _eventType);
		console.log("_num: " + _num);
		if(isLive){
			ga('send', 'event', _eventCategory, _eventType, currUrl, _num);
		}
	}
	
	return true;
}
		

function removeFavsLocalStorage(id) {
  var favs, deletedFav;
  deletedFav = id;
  favs = getFavsLocalStorage();
  favs.forEach(function(id, index) {
    if (deletedFav === id) {
      favs.splice(index, 1);
    }
  });
  localStorage.setItem("favourites", JSON.stringify(favs));
  $("#" + id).removeClass("ctaFavFull");
  getFavsLocalStorage();
}

function getFavsLocalStorage() {
  var favs;

  if (localStorage.getItem("favourites") === null) {
    favs = [];
  } else {
    favs = JSON.parse(localStorage.getItem("favourites"));
  }

  $(".favs .infoTopText").text("(" + favs.length + ")");
  return favs;
}

function loadFavsLocalStorage() {
  getFavsLocalStorage();
  var favs = getFavsLocalStorage();
  favs.forEach(function(value, index) {
    $("#" + favs[index]).addClass("ctaFavFull");
  });
}

function closeCookiesPolicy( urlService ) {
	
  setCookies("policies", "accepted");
	
  cookiesContainer.animate(
    {
      height: "0"
    },
    200
  );
  setTimeout(function() { 
    cookiesContainer.css("display", "none");
    $('.cookiesContainer').css("display", "none");
  }, 210);
	
}

//////////////////////////////*******************/////////////////////////////
function setCookies(name, value) {
		
	fetch(urlServices + "?request=m_cookies&m_c_key="+name+"&m_c_val="+value, {
		
      method: "GET"
		
    }).then(function(response) {
		
        if (response.ok) {
          console.log('policy.ok');
        } else {
          console.log('policy.no');
        }
		
      });	
	
//  value = escape(value);
//  var today = new Date();
//  today.setMonth(today.getMonth() + 1); 
//  document.cookie = name + "=" + value + ";expires=" + today.toUTCString() + ";domain="+window.location.hostname+";path='/'";
	
}

function getCookies(name) {
  var cookies = document.cookie;
  var cookieArr = cookies.split(", ");
  console.log(cookieArr);

  for (var i = 0; i < cookieArr.length; i++) {
    var parArr = cookieArr[i].split("=");
    cookieArr[i] = parArr;

    if (parArr[0] == name) {
      return unescape(parArr[1]);
    }
  }

  return undefined;
}

var MY_MAPTYPE_ID = "custom_style";
var stylesMap = [
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#d3d3d3"
      }
    ]
  },
  {
    featureType: "transit",
    stylers: [
      {
        color: "#808080"
      },
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "on"
      },
      {
        color: "#b3b3b3"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on"
      },
      {
        color: "#ffffff"
      },
      {
        weight: 1.8
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#d7d7d7"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on"
      },
      {
        color: "#ebebeb"
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#a7a7a7"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff"
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on"
      },
      {
        color: "#efefef"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#696969"
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [
      {
        visibility: "on"
      },
      {
        color: "#737373"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#d6d6d6"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {},
  {
    featureType: "poi",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#dadada"
      }
    ]
  }
];
var locations = [],
  marker,
  mapsArray = [],
  infowindowContent;

function render_map($el, $zoom) {
  $zoom = typeof $zoom !== "undefined" ? $zoom : 10;
  var $markers = $el.find(".marker");
  var $idMap = $el.attr("id");
  var args = {
    zoom: $zoom,
    center: new google.maps.LatLng(43.653226, -79.383184),
    mapTypeId: MY_MAPTYPE_ID,
    mapTypeControl: false,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.BOTTOM_CENTER,
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    scrollwheel: false,
    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
      position: google.maps.ControlPosition.RIGHT_CENTER
    },
    scaleControl: true,
    streetViewControl: false
  };
  map = new google.maps.Map(document.getElementById($el.attr("id")), args);
  var maps = {
    name_map: $idMap,
    mapOb: map
  };
  mapsArray.push(maps);
  var styledMapOptions = {
    name: "Greyscale Map"
  };
  var customMapType = new google.maps.StyledMapType(
    stylesMap,
    styledMapOptions
  );
  map.mapTypes.set(MY_MAPTYPE_ID, customMapType); //locations = [];

  $markers.each(function(index) {
    marker = {};
    marker = {
      lat: $(this).data("lat"),
      lng: $(this).data("lng"),
      type: $(this).data("type"),
      mapName: $idMap,
      community_id: $(this).data('community-id'),
    };

    if (marker.type == "info") {
      infowindowContent = $(this).find(".content");
      marker.zoom = $(this).data('zoom'); 
      if (infowindowContent.html()) {
        marker.info = infowindowContent.html();
        marker.clickable = true;
      }
    }

    if (marker.type == "adress") {
      marker.clickable = false;
      marker.zoom = $(this).data('zoom'); 
    }

    if (marker.type == "filter") {
      infowindowContent = $(this).find(".content");
      if (infowindowContent.html()) {
        marker.info = infowindowContent.html();
      }
      marker.clickable = true;
      marker.community = $(this).data("community");		
	  marker.zoom = $(this).data('zoom');
    }

    if (marker.type == "select") {
      marker.clickable = true;
      marker.community = $(this).data("community");
    }

    if (marker.type == "localAmenities") {
      infowindowContent = $(this).find(".content");
      if (infowindowContent.html()) {
        marker.info = infowindowContent.html();
      }
      marker.clickable = true;
      marker.ammenitie = $(this).data("ammenitie");
    }

    locations.push(marker);
  });

  if ($idMap == "searchMap") {
    google.maps.event.addListenerOnce(map, "idle", function() {
      markersObjArr.forEach(function(el) {
        var cont = 0;

        for (var i = 0; i < $(".itemComPage").length; i++) {
          var element = $(".itemComPage")[i];

          if (el.community == $(element).data("community")) {
            cont++;
          }
        }

        if (cont == 0) {
          el.visible = false;
        }
      });
    });
  }

  if ($idMap == "searchMapSearch") {
    google.maps.event.addListenerOnce(map, "idle", function() {
      markersObjArr.forEach(function(el) {
        var cont = 0;

        for (var i = 0; i < $(".searchResults").length; i++) {
          var element = $(".searchResults")[i];

          if (el.community == $(element).data("community")) {
            cont++;
          }
        }

        if (cont == 0) {
          el.visible = false;
        }
      });
    });
  }

  addMarkers(locations, $idMap);
  centerMap($el);
}

var markersObjArr = [],
  openedMarker = false,
  cont = 0,
  currentMarker;

function addMarkers(array, mapID) {
  map = setMap(mapID);
  markerList = array.filter(function(el) {
    return el.mapName == mapID;
  });
  markerList.map(function(marker) {
    locationMap = new google.maps.LatLng(marker.lat, marker.lng);
    infowindow = new google.maps.InfoWindow({
      content: marker.info
    });
    var marker = new google.maps.Marker({
      position: locationMap,
      icon: iconsMap[marker.type].icon,
      map: mapObject,
      clickable: marker.clickable,
      animation: google.maps.Animation.DROP,
      info: marker.info,
      type: marker.type,
      markerId: cont + "-mark",
      community: marker.community,
      ammenitie: marker.ammenitie,
      communityId: marker.community_id,
    });
    cont++;
    markersObjArr.push(marker);
    marker.addListener("click", function() {
      markersObjArr.forEach(function(markerInList) {
        if (markerInList.map === marker.map) {
          markerInList.setIcon(iconsMap[markerInList.type].icon);
        }
      });

      if (marker.type == "info") {
        if (marker.markerId != currentMarker) {
          newType = marker.type + "Active";
          marker.setIcon(iconsMap[newType].icon);
          infowindow.setContent(marker.info);
          infowindow.open(mapObject, marker);
          mapObject.panTo(marker.getPosition());
          currentMarker = marker.markerId;
        } else {
          currentMarker = "";

          if (infowindow.getMap()) {
            console.log("nooo info window");
            infowindow.close();
          } else {
          }

          centerMap($("#" + map));
        }
      }

      if (marker.type == "filter") {
        if (marker.markerId != currentMarker) {
          newType = marker.type + "Active";
          marker.setIcon(iconsMap[newType].icon);
          infowindow.setContent(marker.info);
          infowindow.open(mapObject, marker);
          mapObject.panTo(marker.getPosition());
          currentMarker = marker.markerId;
          $(".communityNameSearch").html(marker.community);
          $(".searchResults").each(function() {
            if ($(this).data("community") != marker.community) {
              $(this)
                .stop()
                .animate({ height: 0 }, 300);
//              $(this).css("margin-bottom", "0");
               $(this).css({"margin-bottom": "0", "padding-top": "0px"});
            } else {
              autoHeight($(this));
//              $(this).css("margin-bottom", "20px");
              $(this).css({"margin-bottom": "20px", "padding-top": "15px"});
            }
          });
        } else {
          currentMarker = "";
          $(".searchResults").css({ height: "auto", "margin-bottom": "20px"});
          $(".communityName").html("");
          centerMap($("#" + map));
        }
      }

      if (marker.type == "select") {
        if(listingCommunities.hasClass('listingListCommunities')){
          backCommunitites();
        }
        if (marker.markerId != currentMarker) {
          newType = marker.type + "Active";
          marker.setIcon(iconsMap[newType].icon);
          mapObject.panTo(marker.getPosition());
          currentMarker = marker.markerId;
          $(".communitySelectedSearch").css("display", "none");
          $(".communityNameSearch").html(marker.community);
          $('.backSearch').css('display', 'none');
          // listingCommunities.css({'height':'calc(100% - 60px)'});
          if(screenWidth > 768){
            $(".itemComPage").removeClass("active");
            $('.itemComPage[data-community="' + marker.community + '"]').addClass(
              "active"
            );
  
            var elPos = $(
              '.itemComPage[data-community="' + marker.community + '"]'
            ).position().top;
            var currScroll = listingCommunities.scrollTop();
  
            elPos = currScroll + elPos;
  
            listingCommunities.stop().animate({ scrollTop: elPos }, 1500);
          }else{
            if(Mapview.hasClass('active')){
              communitiesMobile.addClass('active');
              $('#searchMap').css('height', searchResultsContainer.height() - communitiesMobile.height());
              var communityPos = (marker.markerId).split('-')[0];
              var communityName = marker.community;
              console.log(communityName)
              var communityEl = $('.itemComPage[data-community="'+communityName+'"]');
              fillCommunityMobile($(communityEl), communityPos);

              // var elPos = $('.itemComPage[data-community="'+communityName+'"]').position().top; 
              // var currScroll = listingCommunities.scrollTop();
    
              // elPos = currScroll + elPos;
    
              // listingCommunities.stop().animate({ scrollTop: elPos }, 1500);

              console.log(communityEl);
            }
          }
        } else {
          currentMarker = "";
          communitiesMobile.removeClass('active');
          $('#searchMap').css('height', '');
          $(".itemComPage").removeClass("active");
          $(".searchResults").css("height", "auto");
          $(".communityName").html("");
          $(".communitySelectedSearch").css("display", "none");
          listingCommunities.css({'height':'100%'}); 
          centerMap($("#" + map));
        }
        $('.scrollHelper').css('height', $('.listingCommunities').height() - $('.communitiesCards.itemComPage').last().outerHeight(true));
      }

      if (marker.type == "localAmenities") {
        if (marker.markerId != currentMarker) {
          newType = marker.type + "Active";
          marker.setIcon(iconsMap[newType].icon);
          mapObject.setZoom(14);
          mapObject.panTo(marker.getPosition());
          infowindow.setContent(marker.info);
          infowindow.open(mapObject, marker);
          currentMarker = marker.markerId;
        } else {
          currentMarker = "";
          if (infowindow.getMap()) {
            console.log("nooo info window");
            infowindow.close();
          } else {
          }
          centerMap($("#" + map));
        }
      }
    });
    google.maps.event.addListener(infowindow,'closeclick',function(){
      markersObjArr.forEach(function(el){
        el.setIcon(iconsMap[el.type].icon);
      })
      centerMap($("#" + map));
		$(".searchResults").each(function() {
		  autoHeight($(this));
		  $(this).css({"margin-bottom": "20px", "padding-top": "15px"});
		});
   });
  });
}
 
function fillCommunityMobile($el, pos){ 
  $('.imgComMobile').css('background-image', $el.find('.img_featuredBlock').css('background-image'));
  $('.nameMovCom').html($el.find('.communitySearchTitle').html());  
  $('.cityMovCom').html($el.find('.cityComm').html()); 
  $('.lengthComm').html($('.itemComPage').length);
  $('.currentComm').html(Number(pos)+1);
  if($el.find('.commPrice').html() != undefined){
    $('.priceCommMov').parent().parent().parent().css('display', 'block');
    $('.priceCommMov').html($el.find('.commPrice').html());
  }else{
    $('.priceCommMov').parent().parent().parent().css('display', 'none');
  }
  if($el.find('.commSize').html() != undefined){
    $('.sqftComMov').parent().parent().parent().css('display', 'block'); 
    $('.sqftComMov').html($el.find('.commSize').html());
  }else{
    $('.sqftComMov').parent().parent().parent().css('display', 'none');
  }
  var currId = markersObjArr[pos].communityId;
  var curClickModel =  $('#btnFloor-'+currId).attr('onClick');
  var curClickUnit =  $('#btnMovein-'+currId).attr('onClick');
  $('.designsCommMov').html($el.find('.commDesigns').html());
  $('.designsCommMov').attr('onClick', curClickModel);
  $('.readyCommMov').html($el.find('.commReady').html());
  $('.readyCommMov').attr('onClick', curClickUnit);
  if($el.find('.announceCommText').html() != undefined){
    $('.announceCommMovText').parent().parent().parent().css('display', 'block');
    $('.announceCommMovText').html($el.find('.announceCommText').html());
  }else{
    $('.announceCommMovText').parent().parent().parent().css('display', 'none'); 
  }
  $('.tagCommMov').html($el.find('.tagComm').html()); 
}

function showLocalAmenities(ammenitie) {
  markersObjArr.forEach(function(element) {
    if (element.type != "adress") {
      element.setVisible(false);
      if (ammenitie == element.ammenitie) {
        element.setVisible(true);
        centerMap($("#map_explore_area"));
      }
    }
  });
}
function centerMap($map) {
  if (mapsArray.length > 0) {
    map = $map.attr("id");
    setMap(map);
    var bounds = new google.maps.LatLngBounds();
    markerList.forEach(function(marker, i) {
      var latlng = new google.maps.LatLng(marker.lat, marker.lng);
      bounds.extend(latlng);
    });
    
//    if(markerList[0].zoom != undefined && markerList[0].zoom != ""){ 
//      mapObject.setCenter(bounds.getCenter());
//      mapObject.setZoom(markerList[0].zoom);
//		console.log("markerList[0].zoom");
//		console.log(markerList[0].zoom);
//    }else{
//      mapObject.fitBounds(bounds);
//    }
     if (markerList.length == 1) {
       mapObject.setCenter(bounds.getCenter());
       if(markerList[0].zoom != undefined && markerList[0].zoom != ""){ 
         mapObject.setZoom(markerList[0].zoom);
       }else{
         mapObject.setZoom(16);
       }
     } else {
       mapObject.fitBounds(bounds);
     }
  }
}

function setMap(map) {
  mapArray = mapsArray.filter(function(el) {
    return el.name_map == map;
  });
  mapObject = mapArray[0].mapOb;
  markerList = locations.filter(function(el) {
    return el.mapName == map;
  });
}

var resultsArr = [],
  searchResultTest;

function sort_communities_listings( value ){	
    console.log(value);
    var items = $('.listingItems'); 
    if(value == 'size-asc'){
      items.find('.itemGallery_featuredBlock').sort(function(a, b) {
        return +a.getAttribute('data-size') - +b.getAttribute('data-size');
      }).appendTo(items);
    }
    if(value == 'size-desc'){
      items.find('.itemGallery_featuredBlock').sort(function(a, b) {
        return +b.getAttribute('data-size') - +a.getAttribute('data-size');
      }).appendTo(items);
    }
    if(value == 'price-asc'){
      items.find('.itemGallery_featuredBlock').sort(function(a, b) {
        return +a.getAttribute('data-price') - +b.getAttribute('data-price');
      }).appendTo(items);
    }
    if(value == 'price-desc'){
      items.find('.itemGallery_featuredBlock').sort(function(a, b) {
        return +b.getAttribute('data-price') - +a.getAttribute('data-price');
      }).appendTo(items);
    }
}

function sort_communities_listings_inner( value ){	
	
    var baseUrl, path, search, complete_path;	
	 baseUrl = window.location.origin;
	 path = window.location.pathname;
	if(window.location.search != ""){
	  search = window.location.search.split("&sort")[0];
	  complete_path = path + search + "&sort=" + value;
	}else{
	  complete_path = path + "?sort=" + value;
	}
		
	document.location.href = complete_path;
	
}

function sortResults(option) {
  var baseUrl, path, search, complete_path;
  baseUrl = window.location.origin;
  path = window.location.pathname;
if(window.location.search != ""){
  search = window.location.search.split("sort")[0];
  complete_path = path + search + "sort=" + option;
}else{
  complete_path = path + "?sort=" + option;
}

  if (history.pushState) {
    window.history.pushState("object or string", "Page Title", complete_path);
    fetch(baseUrl + complete_path + "&return=fetch", {
      method: "GET"
    })
      .then(function(response) {
        if (response.ok) {
          return response.text();
        } else {
          return response.text();
        }
      })
      .then(function(texto) {
        $(".listingItems").html(texto);
      });
  } else {
    document.location.href = complete_path + "&return=fetch";
  }
}

var resultsObject = {};

function countResults() {
	
  $('.foundResults').css('display', 'block'); 
//  var baseUrl = window.location.origin;
//
//  if (resultsObject[attr] == undefined) {
//    resultsObject[attr] = [];
//  }
//
//  var index = resultsObject[attr].findIndex(function(el) {
//    return el == value;
//  });
//
//  if (index == -1) {
//    resultsObject[attr].push(value);
//  } else {
//    resultsObject[attr].splice(index, 1);
//  }
//
//  var search = "";
//  Object.keys(resultsObject).forEach(function(item) {
//    var newSearch;
//    console.log(resultsObject);
//    console.log(item);
//    newSearch = item + '=' + resultsObject[item];
//    search = search != '' ? search + "&" + newSearch : newSearch;
//  });
//
//	
//  console.log(search);
  var formSearch = $('#mainSearch');
	
//  fetch(baseUrl + "/search/?" + search + "&return=count", {
  fetch(urlSearch+'?return=count&'+formSearch.serialize(), {
    method: "GET"	
  })
    .then(function(response) {
      if (response.ok) {
        return response.text();
      } else {
        return response.text();
      }
    })
    .then(function(count) {
      $(".resultLabel").html(count);
    });
}







function blogHeaderScroll() {
  var firstSection = $(".blogBody").find("section")[0];
  var firstSectionHeight = $(firstSection).height();
  if ($(window).scrollTop() > firstSectionHeight) {
    blogHeader.css({
      height: "60px",
      transition: "all 0.5s ease"
    });
    if (screenWidth > 768) {
      shareblog.css({ display: "block" });
      setTimeout(function() {
        shareblog.css({ opacity: "1" });
      }, 200);
    } else {
      shareBlogMob.css({ display: "block" });
      setTimeout(function() {
        shareBlogMob.css({ opacity: "1" });
      }, 200);
      $(".firstDownArrow").css("right", "90px");
    }
    categoriesList.css({ right: "80px" });
  } else {
    blogHeader.css({
      height: "60px",
      transition: "all 0.5s ease"
    });
    categoriesList.css({ right: "0%" });
    if (screenWidth > 768) {
      shareblog.css({ opacity: "0" });
      setTimeout(function() {
        shareblog.css({ display: "none" });
      }, 100);
    } else {
      shareBlogMob.css({ opacity: "0" });
      setTimeout(function() {
        shareBlogMob.css({ display: "none" });
      }, 100);
      $(".firstDownArrow").css("right", "15px");
    }
  }
}

function socialShare(type) {
  if (type == "fb") {
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href,
      "sharer",
      "top=" +
        200 +
        ",left=" +
        200 +
        ",toolbar=0,status=0,width=" +
        400 +
        ",height=" +
        400
    );
  } else if (type == "tw") {
	  console.log("7");
	  console.log(twitter_params);
     URLtoShare = "https://twitter.com/intent/tweet?url=" + curURL + "&via=empire_living" + "&text=" + encodeURIComponent(post_title);
	  
	  console.log(URLtoShare);
	window.open(
      URLtoShare,
      "sharer",
      "top=" +
        200 +
        ",left=" +
        200 +
        ",toolbar=0,status=0,width=" +
        600 +
        ",height=" +
        350
    );
	  
	  
	/* 
	window.open(
      "http://twitter.com/share" + twitter_params,
      "sharer",
      "top=" +
        200 +
        ",left=" +
        200 +
        ",toolbar=0,status=0,width=" +
        600 +
        ",height=" +
        600
    );
	*/
  }
}

function opensubmenuBlog(id) {
  subMenuBlogContainer.css("display", 'none');
  $("#".concat(id, "_submenu")).css({
    display: " block"
  });
	
	blogHeaderBG.addClass("visible");
	
  setTimeout(function() {
    $("#" + id + "_submenu").addClass("active");
	blogHeaderBG.addClass("visible");
	  
  }, 100);
}



function closeSubmenuBlog() {
  blogHeaderScroll();
  subMenuBlogContainer.removeClass("active");
	
	blogHeaderBG.removeClass("visible");
	
  // setTimeout(function() {
  //   subMenuBlogContainer.css("display", 'none'); 
  // }, 50);
}

function setAspectratio($el, size) {
  var newHeight;
  if (size == "16") {
    newHeight = $el.width() * (9 / 16);
  } else if (size == "4") {
    newHeight = $el.width() * (3 / 4);
  }
  $el.height(newHeight);
}
var listContainers;
listContainers = $('.listContainers');
function changeView(view) {
  switch (view) {
    case 'map':
        listview.removeClass('active');
        Mapview.addClass('active');
        if($('#searchMapSearch').length > 0){
          listinglist.removeClass('active');
          communityFilters.removeClass('active');

        }else{
          listContainers.removeClass('active');
          communityFilters.removeClass('active');

        }
      break;
    case 'list':
        Mapview.removeClass('active');
        listview.addClass('active');
        if($('#searchMapSearch').length > 0){
          listinglist.addClass('active');
          communityFilters.addClass('active');
        }else{
          listContainers.addClass('active');
          communityFilters.addClass('active');
        }
      break;

    default:
      break;
  }
}

function resizeBannerBlog() {
  var imageBannerHeight;
  if (screenWidth > 768) {
    imageBannerHeight = screenHeight - header.height() - blogHeader.height();
  } else {
    imageBannerHeight =
      screenHeight - header.height() - blogHeaderMobile.height();
  }
  var bannerHeight =
    screenHeight -
    header.height() -
    blogHeader.height() +
    $(".tagsHeader").height();
  if (banner_block.find(".contBannerHide").length == 1) {
    banner_block.height("auto");
  } else {
    bannerFrameText.css("bottom", $(".tagsContent").height() + 40);
    $(".contBannerSec").innerHeight(imageBannerHeight);
    banner_block.height(bannerHeight);
  }
}

function reziseTitleCards() {
  var titles = $(".title_blog_height");

  if (titles.length > 0) {
    var heightMax = 0;

    titles.each(function() {
      heightMax = $(this).height() > heightMax ? $(this).height() : heightMax;
    });
    if(screenWidth > 768){
      titles.height(heightMax);
    }
  }
}

function openSubMenuBlogMob(id) {
  if ($("#sub_" + id).height() == "0") {
    $("#" + id)
      .find(".downArrow")
      .css({ transform: "rotate(180deg)", transition: "all 0.3s ease" });
    autoHeight($("#sub_" + id), 200);
    setTimeout(function() {
      autoHeight(sub_menuMob, 200);
    }, 200);
  } else {
    $("#" + id)
      .find(".downArrow")
      .css({ transform: "rotate(0deg)", transition: "all 0.3s ease" });
    $("#sub_" + id)
      .stop()
      .animate({ height: 0 }, 200);
    if (id != "menuMob") {
      setTimeout(function() {
        autoHeight(sub_menuMob, 200);
      }, 200);
    } else {
      $(".downArrow").css({
        transform: "rotate(0deg)",
        transition: "all 0.3s ease"
      });
      subMenuMob.height(0);
    }
  }
}

function resizeListing() {
  setAspectratio(principalImage, "4");
  imagesContainer.height(principalImage.height());
  if (currentInterior.css("background-image") == "none") {
    $("#interior-0").addClass("active");
    currentInterior.css(
      "background-image",
      $("#interior-0").css("background-image")
    );
  }
  setAspectratio(interior, "4");
  if (flooplanIframe.length > 0) {
    if (screenWidth > 768) {
      setAspectratio(flooplanIframe, "16");
    } else {
      flooplanIframe.height(screenHeight - header.height());
    }
  }
  // $(".floorplan_parent").each(function() {
  //   var firstChild = $(this).children()[0];
  //   $(this).width($(firstChild).width());
  // });
}

function changeImageListing(num) {
 var currinterior = $("#interior-" + num);	
	var typeInterior = currinterior.data('type');
  interior.removeClass("active");
  $("#interior-" + num).addClass("active");
  currentInterior.data("current", num);
				
	  var img = currinterior.css("backgroundImage");
	  currentInterior.css("background-image", img);	
	
		currentInterior.html('');
	
	if( typeInterior == 'youtube' ){
		var iframe = '<iframe src="'+currinterior.data('video')+'" style="width: 100%; height: 100%; overflow= hidden;" ></iframe>';
	  currentInterior.html(iframe);
	}
}

function resizePresale() {
  resizeHeaderPresale();
}

function resizeHeaderPresale() {
  setAspectratio(principalImage, "4");  
  if (screenWidth > 768) {
    cardPresaleContainer.innerHeight(principalImage.height());
  } else {
    cardPresaleContainer.innerHeight("auto");
  }
  if (elevationImage.length > 0) {
    if (elevation.length > 0) {
      $("#elevation-0").addClass("active");
      elevationImage.css(
        "background-image",
        "url(" + $("#elevation-0").data("image") + ")"
      );
    }
  }
}

function changeElevation(id, price, size) {
  elevation.removeClass("active");
  $("#elevation-" + id).addClass("active");
  elevationImage.css(
    "background-image",
    "url(" + $("#elevation-" + id).data("image") + ")"
  );
  $('#price_info').html('$'+price);
  $('#size_info').html(size);
}

function resizeMainHeader() {
  var firstSection = $(".entry-content > section")[0];
  if ($(firstSection).hasClass("full-block")) {
    if(firstSection != undefined){
      if (adjustMenu) {
        header.removeClass("fullActive");
      }
    }
  } else {
    if(firstSection == undefined){
    }else{
      $("section").css("margin-top", header.height());
    }
  }
}

var amenitiesListItem, imgAmenitiesOverview;
imgAmenitiesOverview = $(".imgAmenitiesOverview");
amenitiesListItem = $(".amenitiesListItem");

amenitiesListItem.on("click", changeAmenitiesView);

function changeAmenitiesView() {
  var id = $(this).attr("id");
  console.log(id);
  amenitiesListItem.removeClass("active");
  $(this).addClass("active");
  imgAmenitiesOverview.removeClass("active");
  $("#imgOverview-" + id).addClass("active");
}

var commActive;
function backCommunitites() { 
  $('.communitySelectedSearch').css('display', 'none');
  $('.communityFilters').css('display', 'none');
  listingCommunities.find('.preloaderContainer').remove();
  $('.itemComPage').css('opacity','1');
  listingCommunities.removeClass("listingListCommunities");
  listinglist.addClass("listingListCommunities")
  // markersObjArr.forEach(function(element, index){
  //   if(element.community == $('.communityNameSearch').html()){
  //     google.maps.event.trigger(markersObjArr[index], 'click'); 
  //   }
  // });
  markersObjArr.forEach(function(el, index){
    console.log(index);
    if(el.community == commActive){
      google.maps.event.trigger(markersObjArr[index], 'click'); 
    }
  });
  $('.scrollHelper').css('height', $('.listingCommunities').height() - $('.communitiesCards.itemComPage').last().outerHeight(true)); 
  listingCommunities.stop().animate({ scrollTop: 0 }, 1500);
}

function viewAvilableHomes(search_params, community_name) {
  let preloadCom = '<div class="preloaderContainer"><div class="preloader"></div></div>';
  $('.itemComPage').css('opacity', '0');
  $('.communityNameSearch').html(community_name);
  $('.listingCommunities').append(preloadCom);
  commActive = community_name;
  if(!$('.itemComPage[data-community="'+community_name+'"]').hasClass('active')){
    markersObjArr.forEach(function(el, index){
      console.log(index);
      if(el.community == community_name){
        google.maps.event.trigger(markersObjArr[index], 'click'); 
      }
    }); 
  }
  if(screenWidth > 768){
    $(".listingItems").html('');
      fetch(urlSearch+"?return=fetch"+search_params,
          {
          method: "GET"
          }
      )
          .then(function(response) {
          if (response.ok) {
            return response.text();
          } else {
            return response.text();
          }
        })
        .then(function(texto) {
          $(".listingItems").html(texto);
        })
        .then(function(){
          $('.communitySelectedSearch').css({'display': 'block',
            'margin-top': '40px'});
            $(".communitySelectedSearch").css("display", "block");
//            $(".communityNameSearch").html(marker.community);
            $('.backSearch').css('display', 'block');
            communityFilters.css('display', 'block');
            listingCommunities.addClass("listingListCommunities");
            listinglist.removeClass("listingListCommunities");
            listinglist.css("height", "calc(100% - 60px)");
            setAspectratio($('.listingItems .img_featuredBlock'), '4');
            $('.unitsAvailable').unbind();
            $('.unitsAvailable').click(showUnitsAvailable);
        });

  }else{
    communityFilters.css('display', 'block');
    $('.lisdtingCommunities #sortResults').css('display', 'none');
    if(Mapview.hasClass('active')){
      changeView('list');
    }
    $(".listingList").html('');
      fetch(urlSearch+"?return=fetch"+search_params,
          {
          method: "GET"
          }
      )
          .then(function(response) {
          if (response.ok) {
              return response.text();
          } else {
              return response.text();
          }
          })
          .then(function(texto) {
            $(".listingItems").html(texto);
          })
          .then(function(e){
            $('.communitySelectedSearch').css({'display': 'block',
              'margin-top': '40px'});
            $('.backSearch').css('display', 'block');
            listinglist.removeClass("listingListCommunities");
            communitiesMobile.removeClass('active');
            communityFilters.css('display', 'block');
            $('.lisdtingCommunities #sortResults').css('display', 'block');
            listinglist.addClass("active");
            listinglist.css("height", "100%");
            listingCommunities.addClass("listingListCommunities");
            setAspectratio($('.listingItems .img_featuredBlock'), '4');
            $('.unitsAvailable').unbind();
            $('.unitsAvailable').click(showUnitsAvailable);
          })
  }
	
}

var listingImage = $(".listingImage");
var infoListing = $(".infoListing");
var priceOrientationListing = $(".priceOrientationListing");
var listingOrientation = $(".listingOrientation");
var listingMls = $(".listingMls");

function resizeListingsPage() {
  infoListing.height("auto");
  var infoHeight = 0;
  listingOrientation.height(priceOrientationListing.height());
  listingMls.height(priceOrientationListing.height());
  setTimeout(function() {
    infoListing.each(function() {
      if ($(this).height() > infoHeight) {
        infoHeight = $(this).height();
      }
    });
    infoListing.height(infoHeight);
  }, 100);
  setTimeout(function(){
    setAspectratio(listingImage, "4");
  }, 200);
  //setSliders();
}

// function setSliders() {
//   $(function() {
//     $("#slider-range").slider({
//       range: true,
//       min: 0,
//       max: 1000,
//       values: [0, 1000],
//       slide: function(event, ui) {
//         $("#sizeMin").val(ui.values[0]);
//         $("#sizeMax").val(ui.values[1]);
//         $("#sizeMinShow").html(ui.values[0]);
//         $("#sizeMaxShow").html(ui.values[1]);
//       }
//     });
//     $("#sizeMinShow").html("0");
//     $("#sizeMaxShow").html("1000");
//     $("#sizeMin").val($("#slider-range").slider("values", 0));
//     $("#sizeMax").val($("#slider-range").slider("values", 1));
//   });
// }

var PopupContainerOsc = $(".PopupContainerOsc");

function activeOsc(open) {
  if (open) {
    PopupContainerOsc.css("display", "block");
    setTimeout(function() {
      PopupContainerOsc.addClass("active");
      buttonsOscMobile.addClass("active");
    }, 100);
    setTimeout(function() {
      popupBg.css("opacity", "1");
    }, 300);
  }
  if (!open) {
    PopupContainerOsc.removeClass("active");
    popupBg.css("opacity", "0");
    setTimeout(function() {
      PopupContainerOsc.css("display", "none");
    }, 100);
  }
}

var contactBtn = $(".contactBtn");
var contactBoxForm = $(".contactBoxForm");

function changeForm(num) {
  contactBtn.removeClass("active");
  contactBoxForm.removeClass("active");

  $("#contactBtn-" + num).addClass("active");
  $("#contact-" + num).addClass("active");
}

var portraitDecor = $('.portraitDecor');
var consultantImg = $('.consultantImg');
var consultantName = $('.consultantName');
var resumeConsultant = $('.resumeConsultant');
var consultantPopup = $('.consultantPopup');

portraitDecor.click(function(){
    decorPopup($(this));
});

function resizeDecor(){
    portraitDecor.height(portraitDecor.width());
}


function decorPopup(consultant){
    consultantImg.height(consultantImg.width());
    consultantImg.css('background-image', consultant.css('background-image'));
    consultantName.html(atob(consultant.data('name')));
    resumeConsultant.html(atob(consultant.data('resume')));
    consultantPopup.addClass('active');
}

function closeDecorPop(){
    consultantPopup.removeClass('active');
}


function updateValues( element, idInput ){
	
	var newValue = $(element).val();
	var currInput = $('#'+idInput);
	var currValues = currInput.val().split(",");
	
	if( currValues[0] == '' ){
		currValues.splice(0, 1);
	}	
	
	if( $(element).is(':checked') ){
		
		if( $.inArray(newValue, currValues) < 0 ){			
			currValues.push(newValue);
		}
		
	}else{
		
		if( $.inArray(newValue, currValues) > -1 ){
			currValues.splice(currValues.indexOf(newValue), 1);
		}
		
	}
  currInput.val(currValues.join());
  var key = idInput.substr(0, idInput.length - 6);
  
  console.log(key);	
  countResults();
	
}

var searchResultsContainer;
searchResultsContainer = $('.searchResultsContainer');

function resizeCommunitiesPage(){
  searchResultsContainer.css('height', screenHeight - header.height());
  $('.listingCommunities .img_featuredBlock').each(function(){
    $(this).height($(this).parent().next().height() +10);
  });
  $('.scrollHelper').css('height', $('.listingCommunities').height() - $('.communitiesCards.itemComPage').last().outerHeight(true)); 
}

var communitiesMobile;
communitiesMobile = $('.communitiesMobile');

function closeCardsCommunities(){
  communitiesMobile.removeClass('active');
  $('#searchMap').height('100%');
  google.maps.event.trigger(markersObjArr[Number($('.currentComm').html())-1], 'click');
}

function openDropdown(){
  if(screenWidth < 768){
    if($('.amenitiesList').hasClass('open')){
      $('.amenitiesList').stop().animate({height: "0"},300);
      $('.amenitiesList').removeClass('open');
    }else{
      autoHeight($('.amenitiesList'), 300);
      $('.amenitiesList').addClass('open');
    }

    if($('.itemsArea').hasClass('open')){
      $('.itemsArea').stop().animate({height: "0"},300);
      $('.itemsArea').removeClass('open');
    }else{
      autoHeight($('.itemsArea'), 300);
      $('.itemsArea').addClass('open');
    }
  }
}

function showUnitsAvailable(){
  var containerUnits = $(this).next();
  if(containerUnits.hasClass('open')){
    containerUnits.removeClass('open');
    $(this).removeClass('open');
    $(this).find('.downArrowUnits').removeClass('open');
    containerUnits.stop().animate({'height': '0'});
  }else{
    $(this).addClass('open');
    containerUnits.addClass('open');
    $(this).find('.downArrowUnits').addClass('open'); 
    autoHeight(containerUnits, 300)
  }
}

function openPopupGalleryById(url){
  fetch(url, {
    method: "GET"
  })
  .then(function(response) {
    if (response.ok) {
      return response.text();
    } else {
      return response.text();
    }
  })
  .then(function(texto) {
    openPopupGallery('open');
    console.log(texto);
    $('#galleryListingContent').html(texto);
  });
}

function openPopupGallery(action) {
  if (action == "open") {
    galleryPopupContainer.css("display", "block");
    setTimeout(function(){
      $('.galleryPopup').not(".slick-initialized").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        arrows: true,
        prevArrow: '<div class="arrow-prev"></div>',
        nextArrow: '<div class="arrow-next"></div>'
      });
      $('.galleryPopup').find(".slick-track").height($('.galleryPopup').height());
      popupBg.css('opacity', '1')
      $('.galleryContent').css('top', '50%');
    },200)
  } else if (action == "close") {
    popupBg.css('opacity', '0')
    $('.galleryContent').css('top', '0%');
    setTimeout(function(){
      $('.galleryPopupContainer').css("display", "none");
    }, 100)
  }
}

var favitemH,favitemC,favitemCom,favImg,compare;
function setVarsFav(){
  favitemH = $('.favItem.homeFav');
  favitemC = $('.favItem.condoFav')
  favitemCom = $('.favItem.communityFav');
  favImg = $('.favImg');
  compare = $('.compare');
}

function getSizeHomesFavs(item, callback){
  var currHH = 0;
  favitemH.each(function(){
  if(screenWidth > 768){
    if($(this).find("a").height() > currHH){
      currHH = $(this).find("a").height()
    }
  }else{
    if($(this).find(".favImg").height() > currHH){
      currHH = $(this).find(".favImg").height()
    }
  }
  });

  return callback(item, currHH);
}

function getSizeComFavs(item, callback){
  var currHC = 0;
  favitemCom.each(function(){
  if(screenWidth > 768){
    if($(this).find("a").height() > currHC){
      currHC = $(this).find("a").height()
    }
  }else{
    if($(this).find(".favImg").height() > currHC){
      currHC = $(this).find(".favImg").height()
    }
  }
  });
  return callback(item, currHC);
}

function setSizeFavs(item, size){
return item.height(size);
}

function resizeFavs(){
	console.log("resize favs");
	
  setVarsFav();
  if(screenWidth > 768){
    setAspectratio(favImg, '4');
  }else{
    $('.homeFav .favImg').css('height', $('.homeFav .favDetails').height());
    setAspectratio($('.communityFav .favImg'), '4');
  }
  getSizeHomesFavs(favitemH, setSizeFavs);
  getSizeHomesFavs(favitemC, setSizeFavs);
  getSizeComFavs(favitemCom, setSizeFavs);

  if(screenWidth > 768){
    compare.css('top', favImg.height() - compare.height() - 10);
  }else{
    $('.homeFav .compare').css('top', $('.homeFav .favImg').height() - compare.height() - 10);
    $('.condoFav .compare').css('top', $('.homeFav .favImg').height() - compare.height() - 10);
    $('.communityFav .compare').css('top', $('.communityFav .favImg').height() - compare.height() - 10);
  }
}

var developerLogo;

developerLogo = $('.developerLogo');

function resizeLandDev(){
  developerLogo.each(function(){
    $(this).height($(this).next().height());
  });
}

/*----QUICK MOVE ----------*/
var quickmoveMap = $('#quickmove_map');
var quickMoveList = $('.quickMoveList');
var mobileQuickMap = $('.mobileQuickMap');
function resizequickMove(){
  if(screenWidth > 768){
    quickmoveMap.height(screenHeight-60);
    quickMoveList.css('max-height', quickmoveMap.height());
  }else{
    setAspectratio(mobileQuickMap, 4); 
  }
}

function closeCardPop(){
  $('.quickMoveHome').removeClass('active');
  $('.bgPopQuick').css('display', 'none'); 
  $('.cardPop').removeClass('active');
  setTimeout(function(){
    $('.cardPop').remove();
  }, 300)
}




function openCard(){
  let urlPop = $(this).data('url');
  let dataClick, typeBtn;1
  let targetBtn = $(this).data('target');
  let name = $(this).data('namebtn');
  typeBtn = $(this).data('type');
  typeBtn == 'href' ? dataClick = $(this).data('ctabtn') : dataClick = $(this).data('ctabtn');
  $('.quickMoveHome').removeClass('active');
  $('.bgPopQuick').css('display', 'block');
  $(this).addClass('active');
  
  

  if(screenWidth > 768){
    let com = $(this).data('community');
    let mylatlng;
    $(markerList).each(function(index, el){
      if(com == el.community){
        mylatlng = new google.maps.LatLng(el.lat, el.lng);
        mapObject.panTo(mylatlng);
      }
    });
    infowindow.close();
    // markersObjArr.forEach(function(point){
    //   point.setIcon(iconsMap[point.type].icon);
    // });
  }


  fetch(urlPop)
  .then(function(response){
    return response.text();
  })
  .then(function(data){
    $('.quickmove-block').append(data);
    $('#btnQuickpop').html(name);
    dataClick == '' || dataClick == 'block_' ? $('#btnQuickpop').css('display', 'none') : ''; 
    typeBtn == 'href' ? $('#btnQuickpop').attr('target', targetBtn) : ''; 
    typeBtn == 'href' ? $('#btnQuickpop').attr('href', dataClick) : $('#btnQuickpop').attr('onclick', "goToSectionQuickPop('"+dataClick+"')") && $('#btnQuickpop').attr('href', 'javascript: void(0);'); 
    $('.galleryPopup').not(".slick-initialized").slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      arrows: true,
      prevArrow: '<div class="arrow-prev"></div>',
      nextArrow: '<div class="arrow-next"></div>'
    });
    $('.galleryPopup').find(".slick-track").height($('.galleryPopup').height());

    
    setTimeout(function(){
      $('.cardPop').addClass('active');
    }, 100)
  });
}

function goToSectionQuickPop(section){
  if (_typeof(section) === "object") {
    section = $(section).attr("id");
  }
  closeCardPop();
  goToSection(section);
}

/*---------------------------------------
-------------- FAVOURITES ---------------
----------------------------------------*/


var compareCont = 0;
var tooltipHtml = `<div class="tooltip">
                      <div class="triangleImage"></div>
                      <div class="close" onclick="closeTooltip()"></div>
                      <p>
                        You can only select 4 homes at a time to compare. 
                      </p>
                      <div class="btnContainer">
                        <a class="ctaUnderline ctaFont text_smallLarge" href="javascript: void(0);" style="color:#ffffff" onclick="closeTooltip()">
                          OK
                        </a>
                        <div class="ctaUnderlineLine" style="background-color:#ffffff"></div>
                      </div>
                    </div>`
var noCommunities = `<div class="InfoNoResults">
                          <p class="text_small">You don't have any favourited communities.</p>
                    </div>`;
var noHomes = `<div class="InfoNoResults">
                    <p class="text_small">You don't have any favourited Homes.</p>
                </div>`;
var noFilterFavs = `<div class="InfoNoResults filterFavs">
                      <p class="text_small">There are no favourites matching your search criteria.</p>
                </div>`;
var listenersFav = false; 

function setListenersFavs(){
  $('.ctaFav').unbind();
  $('.ctaFav').on("click", addFavsLocalStorage);
  $('.compare').unbind();
  $('.compare').on('click', function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).find('.select').html('SELECT');
      compareCont--;
    }else{
      if(compareCont < 4){ 
        $(this).addClass('active');
        $(this).find('.select').html('SELECTED');
        compareCont++;
      }else{
        $('.favsContainer').append(tooltipHtml);
        $('.tooltip').css({'top': $(this).offset().top - $('.tooltip').outerHeight() - 10, 'left' : $(this).offset().left - $('.favsContainer').offset().left - 10});
      }
    }
    if(compareCont == 0){
      $('.favsActions').css('display', 'none')
    }else{
      $('.favsActions').css('display', 'block')
      $('.compareNum').html(compareCont); 
    }
  });
  
  $('.cat').click(function(){
    $('.cat').removeClass('active');
    $('.compare').removeClass('active'); 
    compareCont = 0;
    $('.compare').find('.select').html('SELECT');
    $('.favsActions').css('display', 'none');
    $(this).addClass('active');
    $('.housesContainer').removeClass('active');
    $('.communitiesContainer').removeClass('active');
    if($(this).hasClass('catH')){
      $('.housesContainer').addClass('active');
      $('.FavsContent').height($('.housesContainer').height());
      $('.typesFavs').css('display', 'block')
    }else{
      $('.typesFavs').css('display', 'none')
      $('.communitiesContainer').addClass('active');
      $('.FavsContent').height($('.communitiesContainer').height());
    }
  });
  listenersFav = true;
}

function closeTooltip(){
  $('.tooltip').remove();
}

function formatNumber(num){
	if(num != null && num != ""){
  		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,');
	}else{
		return "";
	}
}

var homesArr, commArr;

function loadFavPage(){
  getFavsLocalStorage();
  let favs = getFavsLocalStorage();
  $('.favsCount').html(favs.length);
	
  var favsWord = $('.favoritesWord').text();	
	if( favs.length == 1 ){
		$('.favoritesWord').html(favsWord.replace("s",""));
	}
  let urlFavs = urlServices + '?request=favs&favsids=';
  console.log("urlService = "+urlFavs);
  fetch(urlFavs+favs,{
    method: "GET"
  })
  .then(function(response){
    return response.json();
  })
  .then(function(datos){
    homesArr = datos.homes;
    commArr = datos.communities;
    let html = ``;
    let htmlCom = ``;

    $('.catCount1').html(commArr.length);
    $('.catCount2').html(homesArr.length);
	  
	  var communitiesStr = $('.wordCommunity').text();
	  var homesStr = $('.wordHome').text();
	  
	  if( commArr.length == 1 ){
		  $('.wordCommunity').html(communitiesStr.replace("ies","y"));
	  }
	  if( homesArr.length == 1 ){
		  $('.wordHome').html(homesStr.replace("s",""));
	  }
	  	  

    homesArr.forEach(function(listing){
      if(listing.status == 'Unit'){
        if(listing.type == 'Home'){
			var priceNumber = '0';
						
			if( listing.price != null ){
				priceNumber = listing.price;
			}			
			
          html += `<div class="favItem homeFav active" data-status="${listing.status}">
                      <div id="${listing.id}" class="ctaFav fav_FeaturedBlock"></div>
                      <div class="compare" data-id="${listing.id}">
                        <div class="checkCompare"></div>
                        <p class="select white">SELECT</p>
                      </div>
                      <a target="_blank" href="${listing.url}">
                        <div class="favImg" style="background-image: url(${listing.image});">
                          <div class="moveInReadyTags">Move-in Ready</div>
                        </div>
                        <div class="favDetails">
                          <div class="location">
                            <div class="nameFav boldFont text_small">${listing.title}</div>
                            <div class="adressFav text_featuredBlock">${listing.subtitle}</div>
                          </div>
                          <div class="price-community">
                            ${ priceNumber == '0' ? '' : `<div class="priceContainer">
                                                              <div class="outer">
                                                                <div class="middle">
                                                                  <p class="favPrice text_mediumSmall boldFont">$${formatNumber(priceNumber)}</p>
                                                                </div>
                                                              </div>
                                                            </div>`}
                            <div class="dataFavContainer">
                              <p class="favCommunity specText">${listing.location}<span class="locationIcon"></span></p>
                              ${listing.mls == '' ? '' : `<p class="specText">MLS</p>
                              <p class="specText">${listing.mls}</p>`}
                            </div>
                          </div>
                          <div class="specs ${listing.GarageFloors != 0 ? '' : 'colSpecs3'}">
                            <div class="spec">
                              <p class="specText">BEDS</p>
                              <p class="text_smallMedium">${listing.beds}</p>
                            </div>
                            <div class="spec">
                              <p class="specText">BATHS</p>
                              <p class="text_smallMedium">${listing.baths}</p>
                            </div>
                            ${listing.GarageFloors != 0 ? `<div class="spec">
                              <p class="specText">GARAGES</p>
                              <p class="text_smallMedium">${listing.GarageFloors}</p>
                            </div>` : ''}                
                            <div class="spec">
                              <p class="specText">SQ.FT.</p>
                              <p class="text_smallMedium">${formatNumber(listing.size)}</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
          `; 
        }
        if(listing.type == 'Condo'){
			var priceNumber = '0';
						
			if( listing.price != null ){
				priceNumber = listing.price;
			}	
          html += `<div class="favItem condoFav active" data-status="${listing.status}">
                    <div id="${listing.id}" class="ctaFav fav_FeaturedBlock"></div>
                    <div class="compare" data-id="${listing.id}">
                      <div class="checkCompare"></div>
                      <p class="select white">SELECT</p>
                    </div>
                    <a target="_blank" href="${listing.url}">
                      <div class="favImg" style="background-image: url(${listing.image});">
                        <div class="moveInReadyTags">Move-in Ready</div>
                      </div>
                      <div class="favDetails">
                        <div class="location">
                          <div class="nameFav boldFont text_small">${listing.title}</div>
                          <div class="adressFav text_featuredBlock">${listing.subtitle}</div>
                        </div>
                        <div class="price-community">
                          ${ priceNumber == '0' ? '' : `<div class="priceContainer">
                                                            <div class="outer">
                                                              <div class="middle">
                                                                <p class="favPrice text_mediumSmall boldFont">$${formatNumber(priceNumber)}</p>
                                                              </div>
                                                            </div>
                                                          </div>`}
                          <div class="dataFavContainer">
                            <p class="favCommunity specText">${listing.location}<span class="locationIcon"></span></p>
                            ${listing.mls == '' ? '' : `<p class="specText">MLS</p>
                            <p class="specText">${listing.mls}</p>`}
                          </div>
                        </div>
                        <div class="specs ${listing.GarageFloors != 0 ? '' : 'colSpecs3'}">
                          <div class="spec">
                            <p class="specText">BEDS</p>
                            <p class="text_smallMedium">${listing.beds}</p>
                          </div>
                          <div class="spec">
                            <p class="specText">BATHS</p>
                            <p class="text_smallMedium">${listing.baths}</p>
                          </div>
                          ${listing.GarageFloors != 0 ? `<div class="spec">
                          <p class="specText">GARAGES</p>
                          <p class="text_smallMedium">${listing.GarageFloors}</p>
                          </div>` : ``}                
                          <div class="spec">
                            <p class="specText">SQ.FT.</p>
                            <p class="text_smallMedium">${formatNumber(listing.size)}</p>
                          </div>
                        </div>
                      </div> 
                    </a>
                  </div>
          `;
        }
      }
      if(listing.status == 'Plan'){
        if(listing.type == 'Home'){
			var priceNumber = '0';
						
			if( listing.price != null ){
				priceNumber = listing.price;
			}	
          html += `<div class="favItem homeFav active" data-status="${listing.status}">
                      <div id="${listing.id}" class="ctaFav fav_FeaturedBlock"></div>
                      <div class="compare" data-id="${listing.id}">
                        <div class="checkCompare"></div>
                        <p class="select white">SELECT</p>
                      </div>
                      <a target="_blank" href="${listing.url}">
                        <div class="favImg" style="background-image: url(${listing.image});"></div>
                          <div class="favDetails">
                            <div class="location">
                              <div class="nameFav boldFont text_small">${listing.title}</div>
                            </div>
                            <div class="price-community">
                              ${priceNumber == "0" ? '' : `<div class="priceContainer">
                                                                <div class="outer">
                                                                  <div class="middle">
                                                                    <p class="favPrice text_mediumSmall boldFont">$${formatNumber(priceNumber)}</p>
                                                                  </div>
                                                                </div>
                                                              </div>`}
                              <div class="dataFavContainer">
                                <p class="favCommunity specText">${listing.location} <span class="locationIcon"></span></p>
                              </div> 
                            </div>
                            <div class="specs ${listing.GarageFloors != 0 ? '' : 'colSpecs3'}">
                              <div class="spec">
                                <p class="specText">BEDS</p>
                                <p class="text_smallMedium">${listing.beds}</p>
                              </div>
                              <div class="spec">
                                <p class="specText">BATHS</p>
                                <p class="text_smallMedium">${listing.baths}</p>
                              </div>
                              ${listing.GarageFloors != 0 ? `<div class="spec">
                                <p class="specText">GARAGES</p>
                                <p class="text_smallMedium">${listing.GarageFloors}</p>
                              </div>` : ''} 
                              <div class="spec">
                                <p class="specText">SQ.FT.</p>
                                <p class="text_smallMedium">${formatNumber(listing.size)}</p>
                              </div>
                          </div>
                        </div>
                      </a>
                  </div>
          `;
        }
        if(listing.type == 'Condo'){
			
			var priceNumber = '0';
						
			if( listing.price != null ){
				priceNumber = listing.price;
			}
          html += `<div class="favItem condoFav active" data-status="${listing.status}">
                      <div id="${listing.id}" class="ctaFav fav_FeaturedBlock"></div>
                      <div class="compare" data-id="${listing.id}">
                        <div class="checkCompare"></div>
                        <p class="select white">SELECT</p>
                      </div>
                      <a target="_blank" href="${listing.url}">
                        <div class="favImg plan" style="background-image: url(${listing.image});"></div>
                          <div class="favDetails">
                            <div class="location">
                              <div class="nameFav boldFont text_small">${listing.title}</div>
                              <div class="orientation text_featuredBlock">${listing.subtitle}</div>
                            </div>
                            <div class="price-community">
                              ${priceNumber == "0" ? '' : `<div class="priceContainer">
                                                                <div class="outer">
                                                                  <div class="middle">
                                                                    <p class="specText">STARTING PRICE</p>
                                                                    <p class="favPrice text_mediumSmall boldFont">$${formatNumber(priceNumber)}</p>
                                                                  </div>
                                                                </div>
                                                              </div>`}
                              <div class="dataFavContainer">
                                <p class="favCommunity specText">${listing.location} <span class="locationIcon"></span></p>
                              </div>
                              
                            </div>
                            <div class="specs ${listing.GarageFloors != 0 ? '' : 'colSpecs3'}">
                              <div class="spec">
                                <p class="specText">BEDS</p>
                                <p class="text_smallMedium">${listing.beds}</p>
                              </div>
                              <div class="spec">
                                <p class="specText">BATHS</p>
                                <p class="text_smallMedium">${listing.baths}</p>
                              </div>
                              ${listing.GarageFloors != 0 ? `<div class="spec">
                                  <p class="specText">GARAGES</p>
                                  <p class="text_smallMedium">${listing.GarageFloors}</p>
                              </div>` : ''} 
                              <div class="spec">
                                <p class="specText">SQ.FT.</p>
                                <p class="text_smallMedium">${formatNumber(listing.size)}</p>
                              </div>
                            </div>
                          </div>
                      </a>
                  </div>
          `;
        }
      }
    });
    commArr.forEach(function(community){
      htmlCom += `<div class="favItem communityFav active">
                    <div id="${community.id}" class="ctaFav fav_FeaturedBlock"></div>
                    <div class="compare" data-id="${community.id}">
                      <div class="checkCompare"></div>
                      <p class="select white">SELECT</p>
                    </div>
                    <a target="_blank" href="${community.url}">
                      <div class="favImg favCom" style="background-image: url(${community.image});"></div>
                      <div class="favDetails favCom">
                        <div class="location">
                          <div class="nameFav boldFont text_small">${community.title}</div>
                          <div class="favCity specText">${community.subtitle}</div>
                          <div class="favTagline specText boldFont">${community.tagline}</div>
                        </div>
                        <div class="specs">
                          <div class="specCom">
                            <p class="specText">PRICE</p>
                            <p class="text_smallMedium">${community.price}</p>
                          </div>
                          <div class="specCom">
                            <p class="specText">SQ.FT</p>
                            <p class="text_smallMedium">${community.size}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>`;
    });
    if(commArr.length > 0){
      $('.communitiesContainer').html(htmlCom);
    }else{
      $('.communitiesContainer').html(noCommunities);
    }
    if(homesArr.length > 0){
      $('.housesContainer').html(html);
    }else{
      $('.housesContainer').html(noHomes);
    }
    console.log(datos.communities);
    console.log(datos.homes);
    resizeFavs();
    loadFavsLocalStorage();
    setListenersFavs();
    commArr.length == 0 ? $('.catH').trigger('click') : $('.catC').trigger('click'); 
  });
}

function filterFavs(el, filter){
  if($(el).hasClass('select')){
    $(el).removeClass('select');
  }else{
    $(el).addClass('select');
  }
  $('.type').each(function(){
    if(filter == 'type'){
      if($('.typeH').hasClass('select') && !$('.typeC').hasClass('select')){
        $('.condoFav').removeClass('active');
        $('.homeFav').addClass('active');
      }else if(!$('.typeH').hasClass('select') && $('.typeC').hasClass('select')){
        $('.condoFav').addClass('active');
        $('.homeFav').removeClass('active');
      }else{
        $('.homeFav').addClass('active');
        $('.condoFav').addClass('active');
      }
    }
    if(filter == 'stat'){
      if($('.typePre').hasClass('select') && !$('.typeMove').hasClass('select')){
        $('.favItem.active').each(function(){
          if($(this).data('status') == 'Plan'){
            $(this).css('display', 'block');
          }else{
            $(this).css('display', 'none');
          }
        });
      }else if($('.typeMove').hasClass('select') && !$('.typePre').hasClass('select')){
        $('.favItem.active').each(function(){
          if($(this).data('status') == 'Unit'){
            $(this).css('display', 'block');
          }else{
            $(this).css('display', 'none');
          }
        });
      }else{
        $('.favItem').css('display', '');
      }
    }
  });
  var contItemsVisible = 0, totalItems;
  totalItems = $('.housesContainer .favItem').length;
    $('.housesContainer .favItem').each(function(){
      if($(this).css('display') == "none")contItemsVisible++;
    });

    if(contItemsVisible == totalItems){
      $('.filterFavs').length > 0 ? '' : $('.housesContainer').append(noFilterFavs); 
    }else{
      $('.housesContainer .InfoNoResults').remove();
    }
}

function launchCompare(){
  $('.compareContent').html('');
  $('#compareFavsContainer').css('display', 'block');
  $('.compare.active').each(function(){
    var itemId = $(this).data('id');
    homesArr.forEach(function(element){
      var htmlCompare = '';
      if(itemId == element.id){
		  var elementPrice = '0';
		  
		  if( element.price != null ){
			  
			  elementPrice = element.price;
			  
		  }
		  
        htmlCompare = `<div class="favItemComp">
        <div class="contentCompare">
          <div class="location">
            <div class="nameFav">${element.title}</div>
            <div class="adressFav specText">${element.subtitle}</div>
          </div>
          <div class="favImg favCom compareImg" style="background-image: url(${element.image});"></div>
          <div class="dataFavContainer">
            <p class="favCommunity"><span class="locationIcon"></span> ${element.location}</p>
            ${element.mls == '' ? '' : `<div class="mlsCompare">
              	                          <p>MLS</p>
                                          <p>${element.mls}</p>
                                        </div>`}
          </div>
          <div class="compareSpecs">		

            ${elementPrice == '0' ?`<div class="spec comparePrice"></div>`: `<div class="spec comparePrice">
                                              <p class="specText">PRICE</p>
                                              <p class="text_small boldFont">$${elementPrice}</p> 
                                            </div>`}
            <div class="spec">
              <p class="specText">BEDS</p>
              <p class="text_small">${element.beds}</p>
            </div>
            <div class="spec">
              <p class="specText">BATHS</p>
              <p class="text_small">${element.baths}</p>
            </div>
            ${element.GarageFloors == '0' ? '' : `<div class="spec">
                                                    <p class="specText">GARAGES</p>
                                                    <p class="text_small">${element.GarageFloors}</p>
                                                  </div>`}
            <div class="spec">
              <p class="specText">SQ.FT.</p>
              <p class="text_small">${element.size}</p>
            </div>
          </div>
          ${element.features == undefined ? '' : `<div class="compareFeatures">
                                                    <P class="text_smallLarge boldFont">FEATURES AND FINISHES</P>
                                                    <div class="featuresListCompare">
                                                      ${(element.features).map(feature => '<p class="text_small">'+feature+'</p>').join('')}
                                                    </div>
                                                  </div>`}
        </div>
      </div>`;
        $('.compareContent').append(htmlCompare);
        setAspectratio($('.compareImg'), '4');
      }
    });
    commArr.forEach(function(element){
      var htmlCompare = '';
      if(itemId == element.id){
		   var elementPrice = '0';
		  
		  if( element.price != null ){
			  
			  elementPrice = element.price;
			  
		  }
		  
        htmlCompare = `<div class="favItemComp">
        <div class="contentCompare">
          <div class="location">
            <div class="nameFav">${element.title}</div>
            <div class="adressFav specText">${element.subtitle}</div>
          </div>
          <div class="favImg favCom compareImg" style="background-image: url(${element.image});"></div>
          <div class="dataFavContainer">
            <p class="tagLineCompare">${element.tagline}</p>
          </div>
          <div class="compareSpecs">
            ${elementPrice == '0' ? '' : `<div class="spec">
                                              <p class="specText">PRICE</p>
                                              <p class="text_small">${elementPrice}</p> 
                                            </div>`}
            <div class="spec">
              <p class="specText">SQ.FT.</p>
              <p class="text_small">${element.size}</p>
            </div>
          </div>
          ${element.features == undefined ? '' : `<div class="compareFeatures">
                                                    <P class="text_smallLarge boldFont">FEATURES AND FINISHES</P>
                                                    <div class="featuresListCompare">
                                                      ${(element.features).map(feature => '<p class="text_small">'+feature+'</p>').join('')}
                                                    </div>
                                                  </div>`}
        </div>
      </div>`;
        $('.compareContent').append(htmlCompare);
        setAspectratio($('.compareImg'), '4');
      }
    });
  });
  $('.favItemComp').css('height',screenHeight - 60);
  if(screenWidth < 768){
    $('.compareContent').css('width', (screenWidth * 0.8)*compareCont);
    $('.favItemComp').css('width', screenWidth * 0.8);
  }
}

function closeCompare(){
  $('#compareFavsContainer').css('display', 'none');
}

function closeShareFavs(){
  $('.shareFavsPopUp').removeClass('open');
  $('.shareBg').removeClass('open');
  $('.shareFavsForm').trigger("reset");
}

	console.log("before openShareFavs");

function openShareFavs(cantidad){
  let favs = getFavsLocalStorage();
	idsSelected = [];
	console.log("openShareFavs");
  if(cantidad == 'all'){
    $('.shareCount').html(favs.length);
	  
	  var shareText = $('.shareText').text();
	  if( favs.length == 1 ){
		  $('.shareText').html(shareText.replace("s",""));
	  }
	  
    $('.compare').each(function(){
      var idFav = $(this).attr('data-id');
      idsSelected.push(idFav);
    })
  }else{
    $('.shareCount').html(compareCont);
	  
	  var shareText = $('.shareText').text();
	  if( compareCont == 1 ){
		  $('.shareText').html(shareText.replace("s",""));
	  }
	  
    $('.compare.active').each(function(){
      var idFav = $(this).attr('data-id');
      idsSelected.push(idFav);
    })
  }
  $('#idFavourites').val(idsSelected.toString());
  $('.shareFavsForm').attr('action', urlServices+'?request=sendfavs&favourites='+idsSelected.toString());
  $('.g-recaptcha div').first().css('width', '100%');
  $('.shareFavsPopUp').addClass('open');
  $('.shareBg').addClass('open');
}

var idsSelected = [];

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

 
/*-----------------------------------------------
------------------ VIEWS ------------------------
-----------------------------------------------*/



var panoArray = [];
var topPanoLoaded = false, bottomPanoLoaded = false;

function takeImg(_num){
	var refImg = $('#views-'+_num).attr('data-img');
	var refImgThumb = $('#views-'+_num).attr('data-imgThumb');
	
	var totalGrades = $('#views-'+_num).attr('data-totalGrades');
	var percNorth = $('#views-'+_num).attr('data-percNorth');
	var referencepoint = $('#views-'+_num).attr('data-refPoint');	
	
	launchPano(refImg, refImgThumb, totalGrades, percNorth, referencepoint);
}

	
function launchPano(refImg, refImgThumb, totalGrades, percNorth, referencepoint){
	panoArray["refImg"] = refImg;
	panoArray["refImgThumb"] = refImgThumb;
	panoArray["totalGrades"] = totalGrades;
	panoArray["percNorth"] = percNorth;
	panoArray["referencepoint"] = referencepoint;
	
	
	var HTML = "";

	HTML+='<div id="compass"></div>';
	HTML+='<div id="compassTop"></div>';
	HTML+='<div id="dragIcon"></div>';
	HTML+='<div id="closeIconDrag"></div>';
	
	HTML+='<div id="bigDragCont">';
		HTML+='<img id="bigDragBg" src="'+refImg+'"/>';
	HTML+='</div>';
	HTML+='<div id="minDragCont">';
		HTML+='<div id="panoramaMin"></div>';
		HTML+='<img id="minDragBg" src="'+refImgThumb+'"/>';
	HTML+='</div>';
	
	fullBgDragLbox.html(HTML);
	
	minDragCont = $('#minDragCont');
	minDragBg = $('#minDragBg');
	bigDragCont = $('#bigDragCont');
	bigDragBg = $('#bigDragBg');
	
	closeIconDrag = $('#closeIconDrag');
	panoramaMin = $('#panoramaMin');
	compass = $('#compass');
	dragIcon = $('#dragIcon');
	
	bigDragBg.on('load', function() {
		topPanoLoaded = true;
		testLaunchPano(refImg, refImgThumb, totalGrades, percNorth, referencepoint);
  }).each(function() {
		if($(this).complete) $(this).load();
	});
	minDragBg.on('load', function() {
		bottomPanoLoaded = true;
		testLaunchPano(refImg, refImgThumb, totalGrades, percNorth, referencepoint);
		
		var theImage = new Image();
		theImage.src = $(this).attr("src");
		
		$(this).attr("width",theImage.width);
		$(this).attr("height",theImage.height);
  }).each(function() {
		if($(this).complete) $(this).load();
	});
	
}

function testLaunchPano(refImg, refImgThumb, totalGrades, percNorth, referencepoint){
	if(topPanoLoaded && bottomPanoLoaded){
		launchPanoDef(refImg, refImgThumb, totalGrades, percNorth, referencepoint);
	}
}
	
function launchPanoDef(refImg, refImgThumb, totalGrades, percNorth, referencepoint){
	
	fullBgDragLbox.css({display:'block'}).animate({opacity:1},300);
	resizePano();
	
	if(referencepoint == "n") {
		referencepoint = 0;
	}else if(referencepoint == "s") {
		referencepoint = 180;
	}
		
	var refPoint = referencepoint;
	var _diffCompass = totalGrades * percNorth * 0.01;
	var _totalDiff = _diffCompass + refPoint;
		
	
	compass.css({"-ms-transform": 'rotate('+ _totalDiff +'deg)', " -webkit-transform": 'rotate('+ _totalDiff +'deg)', "transform": 'rotate('+ _totalDiff +'deg)'});
	
	panoramaMin.draggable({ 
		axis: "x",
		containment: "#minDragCont",
		scroll: false,
		drag: function( event, ui ) {
			var _left = ui.position.left;
			var _newL = -( _left / screenWidth) * bigDragBg.width();
			
			var _commL = (_left * totalGrades) / (screenWidth - panoramaMin.width());
			var _totalCommL = -_commL + _totalDiff;
			
			bigDragCont.find(".mCSB_container").css("left", _newL);
			compass.css({"-ms-transform": 'rotate('+ _totalCommL +'deg)', " -webkit-transform": 'rotate('+ _totalCommL +'deg)', "transform": 'rotate('+ _totalCommL +'deg)'});
			
			dragIcon.clearQueue().animate({opacity: 0},600, function(){
				$(this).css({display:'none'});
			});
		}
	});
	
	
	
	bigDragCont.mCustomScrollbar({
		axis:"x", // horizontal scrollbar
		setLeft: 0,
		theme:"light-3",
		callbacks:{
			onScroll:function(){
				setTimeout(function(){
					dragIcon.clearQueue().animate({opacity: 0},600, function(){
						$(this).css({display:'none'});
					});
				}, 3000);
				updateTopPano(this);
			},
			whileScrolling :function(){
				updateTopPano(this);
			}
		}
	});
	
	closeIconDrag.click(function(){
		fullBgDragLbox.clearQueue().animate({opacity:0}, 300, function(){
			$(this).css({display:'none'});
			topPanoLoaded = false;
			bottomPanoLoaded = false;
		});
	});
	
	fullBgDragLbox.animate({opacity:1},300);
	
	
}

function updateTopPano(el){
	var totalGrades = panoArray["totalGrades"];
	var percNorth = panoArray["percNorth"];
	var referencepoint = panoArray["referencepoint"];	
	
	if(referencepoint == "n") {
		referencepoint = 0;
	}else if(referencepoint == "s") {
		referencepoint = 180;
	}
		
	var refPoint = referencepoint;
	var _diffCompass = totalGrades * percNorth * 0.01;
	var _totalDiff = _diffCompass + refPoint;
	
	var _panLeft = el.mcs.left;
	var _newPanL = -( _panLeft/ bigDragBg.width() ) * screenWidth;
	var _commL = (_panLeft * totalGrades) / (bigDragBg.width() - screenWidth);
	
	var _diffCompass = totalGrades * percNorth * 0.01;
	var _totalDiff = _diffCompass + refPoint;
	var _totalCommL = _commL + _totalDiff;
	
	panoramaMin.css("left", _newPanL);
	compass.css({"-ms-transform": 'rotate('+ _totalCommL +'deg)', " -webkit-transform": 'rotate('+ _totalCommL +'deg)', "transform": 'rotate('+ _totalCommL +'deg)'});
}

function resizePano(){
	//locateImageOn(minDragBg, minDragCont, "bg", false);
	
	var _realWidth = minDragBg.attr("width");
	if(_realWidth == 0){
		_realWidth = minDragBg.width();
	}
	var _realHeight = minDragBg.attr("height");
	if(_realHeight == 0){
		_realHeight = minDragBg.height();
	}
	
	var rate = _realHeight / _realWidth;
	minDragBg.width(screenWidth).height(screenWidth * rate);
	
	var x = minDragCont.width();
	var y = minDragCont.height();
	
	var newy = screenHeight - y;
	bigDragBg.height(newy);
	var newx = (x / y)* newy;
	bigDragBg.width(newx);
	
	dragIcon.css({top:newy*0.5, left:screenWidth*0.5});
	panoramaMin.width((screenWidth / newy)* y);	
} 

function animateValue(id, start, end, duration) {
  var range = end - start;
  var current = start;
  var increment = end > start? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function() {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
          clearInterval(timer);
      }
  }, stepTime);
}

function animateResults(){
  var num, child;
  var circle = document.querySelectorAll('circle');
  circunferences = [];
	
  circle.forEach(function(el, index){
    var radius = el.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;
    circunferences.push(circumference);
    circle[index].style.opacity = 1;
    circle[index].style.strokeDasharray = circunferences[index]+' '+circunferences[index];
    circle[index].style.strokeDashoffset = circunferences[index];
  });

	
  setTimeout(function(){
    $('.percentResult').each(function(index){		
      num = $(this).data('percent');
      child = $(this).children().children().children().children();    
      animateValue($(child).attr('id'),0,num,1000);
      setProgress(circle[index], circunferences[index], num);		
    });
  }, 1000);
}

var circunferences = [];

function setProgress(el, circumference, percent) {
  const offset = circumference - percent / 100 * circumference;
  el.style.strokeDashoffset = offset;
}


function resizeQuizResultsBanner(){
  $('#headerQuiz').css('min-height',$('.resultsQuizContent').height()+140);
}

var searcher = true
function showSearchBlog(){
  if(screenWidth > 768){
    if(searcher){
      searchBlogIcon.css('background-image', 'url('+ urlDirectory +'images/CLOSE-BROWN.png)');
      $('.findBlog .infoTopText').toggleClass("visible");
      $('.blogSearch').toggleClass("visible");
      searcher = false;
    }else{
      searchBlogIcon.css('background-image', 'url('+ urlDirectory +'images/brown-search.png)');
      $('.findBlog .infoTopText').toggleClass("visible");
      $('.blogSearch').toggleClass("visible");
      searcher = true;
    }
  }else{
      if(searcher){
        searchBlogIcon.css('background-image', 'url('+ urlDirectory +'images/CLOSE-BROWN.png)');
        $('.searchBlogMobile').toggleClass("visible");
        searcher = false;
      }else{
        searchBlogIcon.css('background-image', 'url('+ urlDirectory +'images/brown-search.png)');
        $('.searchBlogMobile').toggleClass("visible");
        searcher = true;
      }
  }
}

function activeformPopup(open, fomr_id){
	var elementForm = $("#"+fomr_id);
  if (open) {
    elementForm.css("display", "block");
    setTimeout(function() {
      elementForm.addClass("active");
    }, 100);
    setTimeout(function() {
      $('.popupFormBg').css("opacity", "1");
    }, 300);
  }
  if (!open) {
    elementForm.removeClass("active");
    $('.popupFormBg').css("opacity", "0");
    setTimeout(function() {
      elementForm.css("display", "none");
    }, 100);
  }
}

var openedCommunityMenu = false;

function openSubmenuDropdown(){
  if(screenWidth < 1024){
    if(!openedCommunityMenu){
      console.log('opened');
      autoHeight($('#communityMenu .communityMenu__items'), 300);
      $('.StickycommunityMenu .mobile__arrow').addClass('active');
      openedCommunityMenu = true;
    }else{
      console.log('closed');
      $('#communityMenu .communityMenu__items')
      .stop()
      .animate({height: "0"},300);
      $('.StickycommunityMenu .mobile__arrow').removeClass('active');
      openedCommunityMenu = false;
    }
  }
}


function openGalleryHomePlans( CameraElement ){
		
	var imagesEL = $(CameraElement).find('.cameraHomePlansInner').children();
	var HTML = '';
	
	HTML += 	'<div class="closePopupGallery" onClick="openPopupGallery(\'close\')"></div>';
	HTML += 	'<div class="galleryPopup" style="height:100%">';
	
			imagesEL.each(function(){
				var imageCurr = $(this).data('image');
				HTML += '<div class="popupGalleryImages" style="background-image:url('+imageCurr+')"></div>';
			});
	
	HTML += 	'</div>';
	
	openPopupGallery('open');
    $('#galleryListingContent').html(HTML);
	
}

