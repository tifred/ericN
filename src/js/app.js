'use strict';

/*
   initialSeries is the model for each Series.
   It is an array of objects; each object is a series.

   Each series includes:
     A picture for the main page.
     An article with text and a picture.
     A gallery of many images.

   All images for the series are in the "images" array of each series object.
   The first image should be the main image and have "MAIN" in its name.
   All MAIN images should have an identical picture ratio.  e.g. 3:2.
   It is probably good that they all be the same dimensions: e.g. 1000 x 667.

   Why? Because they will all appear in a grid on the main page.
   Using the same size/ratio makes them line up nicely.
   This may require cropping the original images.

   All other images are used in the article and gallery pages.
   Use the "artImgIdx" number to pick which image should be in the article.
   The images do not need to have a uniform size or picture ratio.
   One might want to include an uncropped version of the MAIN image
   in the "images" array.
*/

var initialSeries = [
  {
    seriesName: "S1_Eric_E",
    seriesCaption: "Mike E. -- Suigetsukan Dojo",
    galleryNiceName: "Gallery for Mike E., Suigetsukan Dojo",
    mainImgIdx: 0,
    artImgIdx: 12,
    artTitle: "MIKE E. IN THE STUDIO",
    artText: '<p>He teaches Japanese martial art system such as Jujitsu, Shinkendo and Aikido. He is also a student of Bagua Zhang, a Chinese Internal Art. This project includes Mike\'s portrait and images from his teachings and trainings.<p>',
    artTextTwo: '',
    images: [
      {
        img: "web_005_MAIN",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "web_001",
        captionText: "The Master, At Rest",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "web_002",
        captionText: "Make My Day",
        altText: "Sample Alternate Text",
        orient: "port"
      },
      {
        img: "web_003",
        captionText: "Seated, Yet Dangerous",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "web_004",
        captionText: "Look Out!  Sword Fight!",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "web_005",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "web_006",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "web_007",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "port"
      },
      {
        img: "web_008",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "web_009",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "web_010",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "web_011",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "web_012",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "web_013",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "port"
      },
      {
        img: "web_014",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "port"
      }
    ]
  },
  {
    seriesName: "S2_Argentina",
    seriesCaption: "Argentina",
    galleryNiceName: "Gallery for Argentina Series",
    mainImgIdx: 0,
    artImgIdx: 4,
    artTitle: "TRAVELS IN ARGENTINA",
    artText: '<p>Traveling through Argentina, I met up with family and friends. I attempted to capture candid scenery. Ordinary tasks such as dusting crumbs from the table were fascinating to me if I was able to make it a picturesque photograph.When taking pictures of people I try to achieve good candid imagery. My pictures work it and only when people are at ease with the way I shoot pictures of them. Once they they stop posing for the camera I can depict them "real." <p>',
    artTextTwo: '',
    images: [
      {
        img: "Series2_003_MAIN",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "Series2_001",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "port"
      },
      {
        img: "Series2_002",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "Series2_003",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "Series2_004",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "Series2_005",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "Series2_006",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "Series2_007",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "Series2_008",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "Series2_009",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "Series2_010",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "port"
      },
      {
        img: "Series2_011",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "Series2_012",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "Series2_013",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "Series2_014",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "land"
      },
      {
        img: "Series2_015",
        captionText: "Sample Caption",
        altText: "Sample Alternate Text",
        orient: "port"
      }
    ]
  },
  {
    seriesName: "S3_Nature",
    seriesCaption: "Nature",
    galleryNiceName: "Gallery for Nature Series",
    mainImgIdx: 0,
    artImgIdx: 4,
    artTitle: "NATURE",
    artText: '<p>My Nature series is about being playful with light. I’m looking for a good composition of highlight with shadow.</p>',
    artTextTwo: '',
    images: [
      {
        img: "Series3_005_MAIN",
        captionText: "Sample Text",
        altText: "People in street",
        orient: "land"
      },
      {
        img: "Series3_001",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "land"
      },
      {
        img: "Series3_002",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "land"
      },
      {
        img: "Series3_003",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "port"
      },
      {
        img: "Series3_004",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "land"
      },
      {
        img: "Series3_005",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "land"
      },
      {
        img: "Series3_006",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "port"
      },
      {
        img: "Series3_007",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "port"
      },
      {
        img: "Series3_008",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "port"
      },
      {
        img: "Series3_009",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "port"
      },
      {
        img: "Series3_010",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "port"
      }
    ]
  },
  {
    seriesName: "S4_Monk",
    seriesCaption: "A Monk In Oakland",
    galleryNiceName: "Gallery for A Monk In Oakland Series",
    mainImgIdx: 0,
    artImgIdx: 5,
    artTitle: "MONK",
    artText: '<p>This series includes a portrait session I did with a Buddhist monk. He built an altar into his trailer to allow people to pray and meditate in the Eastlake district of Oakland.<p>',
    artTextTwo: '',
    images: [
      {
        img: "Monk_003_MAIN",
        captionText: "Sample Text",
        altText: "People in street",
        orient: "land"
      },
      {
        img: "Monk_001",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "land"
      },
      {
        img: "Monk_002",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "land"
      },
      {
        img: "Monk_003",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "land"
      },
      {
        img: "Monk_004",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "land"
      },
      {
        img: "Monk_005",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "port"
      },
      {
        img: "Monk_006",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "port"
      }
    ]
  },
  {
    seriesName: "S5_Martial_Arts_Events",
    seriesCaption: "Martial Arts Events.",
    galleryNiceName: "Gallery For Martial Arts Events Series",
    mainImgIdx: 0,
    artImgIdx: 12,
    artTitle: "TWO MARTIAL ARTS EVENTS",
    artText: '<p>This series shows commissioned work from two separate martial art events. Event commissions are catered to the needs of the client. I specialize in unchoreographed and/or posed action, portraiture, and candid/artistic moments.<p>',
    artTextTwo: '',
    images: [
      {
        img: "Events_006_MAIN",
        captionText: "Sample Text",
        altText: "People in street",
        orient: "land"
      },
      {
        img: "Events_001",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "land"
      },
      {
        img: "Events_002",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "port"
      },
      {
        img: "Events_003",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "port"
      },
      {
        img: "Events_004",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "port"
      },
      {
        img: "Events_005",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "land"
      },
      {
        img: "Events_006",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "land"
      },
      {
        img: "Events_007",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "port"
      },
      {
        img: "Events_008",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "land"
      },
      {
        img: "Events_009",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "port"
      },
      {
        img: "Events_010",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "port"
      },
      {
        img: "Events_011",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "port"
      },
      {
        img: "Events_012",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "port"
      },
      {
        img: "Events_013",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "land"
      }
    ]
  },
  {
    seriesName: "S6_Singles",
    seriesCaption: "Single Shots",
    galleryNiceName: "Gallery For Single Shots Series",
    mainImgIdx: 0,
    artImgIdx: 4,
    artTitle: "SINGLE SHOTS",
    artText: '<p>Some shots that don\'t fit into any theme per se<p>',
    artTextTwo: '',
    images: [
      {
        img: "Singles_006_MAIN",
        captionText: "Sample Text",
        altText: "People in street",
        orient: "land"
      },
      {
        img: "Singles_001",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "land"
      },
      {
        img: "Singles_002",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "land"
      },
      {
        img: "Singles_003",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "port"
      },
      {
        img: "Singles_004",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "port"
      },
      {
        img: "Singles_005",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "land"
      },
      {
        img: "Singles_006",
        captionText: "Sample Text",
        altText: "Man in car",
        orient: "land"
      },
    ]
  }
];

/*
  extraPages is the model for the AboutMe, Contact, and Articles pages.
  It is an array of objects; each object is a page.

  Pages include text and at least one picture.
*/


var extraPages = [
  {
    pageName: "AboutMe",
    textCol1: '<p>My photography includes candid compositions, nature details, events, documentary portraits and images that simply stand on their own. I aim for good composition and value placement through the use of light and shadow. Sometimes I enjoy shooting people and their daily activities to capture a candid scene. Other times I prefer stomping solo through nature or city streets looking for ways to process it into an image. I\'m exploring a range of ways to use my camera and not settling on a particular style at the moment. I\'m available for hire to shoot events. And all images are available as digital prints.<p><br><p>Contact me by email at eric.nomburg@gmail.com or on Facebook. <a href="https://www.facebook.com/eric.nomburg" class="zocial-facebook"></a>',
    textCol2: "",
    images: [
      {
        img: "aboutme",
        captionText: "Photo by Reed Cooper",
        alt: "Woman with Camera",
        orient: "land"
      }
    ]
  },
  {
    pageName: "Contact",
    textCol1: '<p>Contact me at tracyjohnston@comcast.net.</p>',
    textCol2: "",
    images: [
      {
        img: "contact",
        captionText: "",
        alt: "Woman Smiling",
        orient: "land"
      }
    ]
  },
  {
    pageName: "LongArtMain",
    title1: "DESERT RATS",
    title2: "LA VIDA LOCA",
    textCol1: '<p>DOWN CARSON pass from San Francisco came the urban woman in a Japanese car filled with Diet Cokes and Western history books, country music filling up every sensual space but the view, which at the moment was beyond the grasp of anything mortal: a vast, high desert stretching east to Utah filled with mountain ranges dropped from the cosmos like rumpled pieces of silk. Dry lake beds appeared like mirages; great swirling circles in chalk.&nbsp; The woman headed into it all awash in melodrama...<br><br><a href="/magazine-writing-1-2-1">click to continue reading</a></p>',
    textCol2: '<p>Spider had his melancholy expression, the one that always made Loca forgive him. His sable brown eyes looked so sympathetic and sad that she forgot about the ways he treated her bad, the times he messed up on her with other girls, or went out shooting with his home boys. She was feeling sorry for him even before he had the hallucinations. He was a <em>vato loco</em>, a crazy guy in the East Los Angeles barrios , but it was because he didn\'t give a fuck about...<br><br><a href="/la-vida-loca">click to continue reading</a></p>',
    images: [
      {
        img: "desertman",
        captionText: "",
        alt: "Older Man Smiling",
        orient: "land"
      },
      {
        img: "loco",
        captionText: "",
        alt: "Kids on the street",
        orient: "land"
      }
    ]
  }
];


/*
  makeSrcset: helper function to build a long string for srcset attribute.
  The values are a perfect match for the main page, where four images
  are drawn in each row.  Browsers don't make perfect matches on these
  values, however, and the options below seem sufficient for the extra pages,
  even though they do not draw four images in a row.
*/

function makeSrcset(imgPath) {
  return imgPath + "-640.jpg 1000w," +
         imgPath + "-640.jpg 640w," +
         imgPath + "-540.jpg 540w," +
         imgPath + "-440.jpg 440w," +
         imgPath + "-330.jpg 330w," +
         imgPath + "-270.jpg 270w," +
         imgPath + "-220.jpg 220w," +
         imgPath + "-165.jpg 165w";
}

function makeSrcsetPortrait(imgPath) {
  return imgPath + "-330.jpg 1000w," +
         imgPath + "-330.jpg 640w," +
         imgPath + "-330.jpg 540w," +
         imgPath + "-270.jpg 440w," +
         imgPath + "-220.jpg 330w," +
         imgPath + "-165.jpg 270w," +
         imgPath + "-165.jpg 220w," +
         imgPath + "-165.jpg 165w";
}


/*
  Series: constructor used to build an object with
  all data about each series. It is run on each object
  in "initialSeries" when the viewmodel is built.

  It provides enough data to load the main page and all
  associated articles.  It does *not* generate the info
  for the galleries, cause that would be too expensive.
  That happens when a user actually wants to see a gallery.
*/

var Series = function(data) {
  this.seriesName = data.seriesName;
  this.seriesCaption = data.seriesCaption;

  // The main image:
  this.mainImg = data.images[data.mainImgIdx].img;
  this.mainCaptionText = this.seriesCaption;
  this.mainAltText = data.images[data.mainImgIdx].altText;
  this.mainImgPath = "images/" + this.seriesName + "/" + this.mainImg;
  this.mainSrc = this.mainImgPath + "-640.jpg";
  this.mainSrcset = makeSrcset(this.mainImgPath);
  this.mainSizes = "(min-width: 768px) 25vw, 100vw"; // 25 for 4 columns

  // The article image:
  this.artImg = data.images[data.artImgIdx].img;
  this.artCaptionText = data.images[data.artImgIdx].captionText;
  this.artAltText = data.images[data.artImgIdx].altText;
  this.artTitle = data.artTitle;
  this.artText = data.artText;
  this.artTextTwo = data.artTextTwo;
  this.artImgPath = "images/" + this.seriesName + "/" + this.artImg;
  this.artSrc = this.artImgPath + "-640.jpg";
  this.artSrcset = makeSrcset(this.artImgPath);
  this.artSizes = "(min-width: 768px) 58vw, 100vw"; // 58 for a 7/5 col ratio
};


/*
  GalleryImage: constructor to build object for all images in gallery.
  Only called when a gallery is actually selected by user.
*/

var GalleryImage = function(imageData, seriesName, galleryNiceName) {
  this.seriesName = seriesName;
  this.galleryNiceName = galleryNiceName;
  this.img = imageData.img;
  this.captionText = imageData.captionText;
  this.altText = imageData.altText;
  this.imgPath = "images/" + this.seriesName + "/" + this.img;
  this.src = this.imgPath + "-640.jpg";
  if (imageData.orient === "land") {
    this.srcset = makeSrcset(this.imgPath);
  } else {
    this.srcset = makeSrcsetPortrait(this.imgPath);
  }
  this.sizes = "(min-width: 768px) 100vw, 100vw"; // 100 for 1 big column
};


/* The Viewmodel */

var ViewModel = function() {
  var self = this;

  /* Create and set visibility variables */
  this.mainIsVisible = ko.observable(true);
  this.articleIsVisible = ko.observable(false);
  this.galleryIsVisible = ko.observable(false);
  this.aboutmeIsVisible = ko.observable(false);
  this.contactIsVisible = ko.observable(false);
  this.longArtMainIsVisible = ko.observable(false);

  this.homeLinkWasClicked = ko.observable(true);
  this.aboutmeLinkWasClicked = ko.observable(false);
  this.contactLinkWasClicked = ko.observable(false);
  this.articlesLinkWasClicked = ko.observable(false);

  /*
    Create all the variables for an article.
    When a new article is shown, these values are replaced.
  */
  this.artTitle = ko.observable("");
  this.artText = ko.observable("");
  this.artTextTwo = ko.observable("");
  this.artAltText = ko.observable("");
  this.artCaptionText = ko.observable("");
  this.artSrc = ko.observable("");
  this.artSrcset = ko.observable("");
  this.artSizes = ko.observable("");

  /*
    Create all the variables for extra pages (AboutMe, Contact, Articles).
    Note that this one set of variables works for all three pages.
    When a new page is loaded, values are replaced.
    It's possible to have two images and two sets of associated text right now.
  */
  this.EPtitle1 = ko.observable("");
  this.EPtextCol1 = ko.observable("");
  this.EPimg1 = ko.observable("");
  this.EPaltText1 = ko.observable("");
  this.EPcaptionText1 = ko.observable("");
  this.EPimgPath1 = ko.observable("");
  this.EPsrc1 = ko.observable("");
  this.EPsrcset1 = ko.observable("");
  this.EPsizes1 = ko.observable("");

  this.EPtitle2 = ko.observable("");
  this.EPtextCol2 = ko.observable("");
  this.EPimg2 = ko.observable("");
  this.EPaltText2 = ko.observable("");
  this.EPcaptionText2 = ko.observable("");
  this.EPimgPath2 = ko.observable("");
  this.EPsrc2 = ko.observable("");
  this.EPsrcset2 = ko.observable("");
  this.EPsizes2 = ko.observable("");


  /*
    Create empty mainView, articleView array and galleryView array.
    The "main"s don't change, so they don't need to be observable arrays.
   */
  this.mainViewRowOne = [];
  this.mainViewRowTwo = [];
  this.galleryView = ko.observableArray();


  /*
    currentSeries: ensures a click on the picture in an article
    calls up the gallery view for the right series.
  */
  this.currentSeries = ko.observable("");

  this.lastItemShortPadding = ko.observable(false);


  /*
     Populate the mainViews with instances of the Series constructor.
     Want to have four series in each row.
     The "index" argument represents which element the forEach is working on.
  */

  initialSeries.forEach(function(series, index) {
    if (index < 4) {
      self.mainViewRowOne.push(new Series(series));
    } else {
      self.mainViewRowTwo.push(new Series(series));
    }
  });


  // hideAll: Helper function used to hide all the views at once.
  self.hideAll = function() {
    self.mainIsVisible(false);
    self.articleIsVisible(false);
    self.galleryIsVisible(false);
    self.aboutmeIsVisible(false);
    self.contactIsVisible(false);
    self.longArtMainIsVisible(false);
  };

  self.clearLinkVisitedColor = function() {
    self.homeLinkWasClicked(false);
    self.aboutmeLinkWasClicked(false);
    self.contactLinkWasClicked(false);
    self.articlesLinkWasClicked(false);
  };

  /*
    Go back to main page.
    This is *not* called on an initial page load,
    but rather when the "home" link is clicked.
  */

  self.showMain = function() {
    self.hideAll();
    self.clearLinkVisitedColor();
    self.mainIsVisible(true);
    self.currentSeries("");
    self.homeLinkWasClicked(true);
    self.lastItemShortPadding(false);
  };


  /*
    showArticle: show a single article.
    This runs when a user clicks on an image in the main page.
    The "foreach" binding means that a click will pass the model
    of the image clicked upon to this function.
    That's the "series" parameter below.

    Therefore "series" is going to be the entire object
    that was pushed into mainViewRowOne or Two.
    All the data is available to draw this view immediately.
  */

  self.showArticle = function(series) {
    self.mainIsVisible(false);
    self.clearLinkVisitedColor(); // I think this is wrong, navigation-wise.

    self.artTitle(series.artTitle);
    self.artText(series.artText);
    self.artTextTwo(series.artTextTwo);
    self.artSrc(series.artSrc);
    self.artSrcset(series.artSrcset);
    self.artSizes(series.artSizes);
    self.artAltText(series.artAltText);
    self.artCaptionText(series.artCaptionText);

    // Do this to ensure a click on the article picture links to correct gallery.
    self.currentSeries(series.seriesName);

    self.articleIsVisible(true);
  };


  /*
    showGallery: load the Gallery of images for the series.
    The "galleryView" array has to be emptied and replaced.
    It loops through the initialSeries til it finds the right series by name.
    Then it loops through image array for series, skipping the MAIN image.
    The "GalleryImage" constructor builds the object to push onto the galleryView.
  */

  self.showGallery = function() {
    self.galleryView.removeAll();
    self.lastItemShortPadding(true);
    initialSeries.forEach(function(series) {
      if (series.seriesName === self.currentSeries()) {
        series.images.forEach(function(image) {
          if (! /MAIN/.test(image.img)) {
            self.galleryView.push(new GalleryImage(image, series.seriesName, series.galleryNiceName));
          }
        });
      }
    });

    self.articleIsVisible(false);
    self.galleryIsVisible(true);
  };


  // showAboutme: display the About Me page.

  self.showAboutme = function() {
    self.hideAll();
    self.clearLinkVisitedColor();

    extraPages.forEach(function(page) {
      if (page.pageName === "AboutMe") {
        self.EPtextCol1(page.textCol1);
        self.EPimg1(page.images[0].img);
        self.EPcaptionText1(page.images[0].captionText);
        self.EPaltText1(page.images[0].altText);
        self.EPimgPath1("images/extraPages/" + self.EPimg1());
        self.EPsrc1(self.EPimgPath1() + "-440.jpg");
        self.EPsrcset1(makeSrcset(self.EPimgPath1()));
        self.EPsizes1("(min-width: 768px) 40vw, 100vw"); // 40 is right.
      }
    });

    self.aboutmeIsVisible(true);
    self.aboutmeLinkWasClicked(true);
  };


  // showContact: show the Contact page.

  self.showContact = function() {
    self.hideAll();
    self.clearLinkVisitedColor();

    extraPages.forEach(function(page) {
      if (page.pageName === "Contact") {
        self.EPtextCol1(page.textCol1);
        self.EPimg1(page.images[0].img);
        self.EPcaptionText1(page.images[0].captionText);
        self.EPaltText1(page.images[0].altText);
        self.EPimgPath1("images/extraPages/" + self.EPimg1());
        self.EPsrc1(self.EPimgPath1() + "-440.jpg");
        self.EPsrcset1(makeSrcset(self.EPimgPath1()));
        self.EPsizes1("(min-width: 768px) 40vw, 100vw");
      }
    });

    self.contactIsVisible(true);
    self.contactLinkWasClicked(true);
  };


  /*
    showLongArtMain: show the long articles in "Articles" link.
    There are two articles to show.
    The "click to continue reading" link doesn't go anywhere yet.
  */

  self.showLongArtMain = function() {
    self.hideAll();
    self.clearLinkVisitedColor();

    extraPages.forEach(function(page) {
      if (page.pageName === "LongArtMain") {
        self.EPtitle1(page.title1);
        self.EPtextCol1(page.textCol1);
        self.EPimg1(page.images[0].img);
        self.EPcaptionText1(page.images[0].captionText);
        self.EPaltText1(page.images[0].altText);
        self.EPimgPath1("images/extraPages/" + self.EPimg1());
        self.EPsrc1(self.EPimgPath1() + "-440.jpg");
        self.EPsrcset1(makeSrcset(self.EPimgPath1()));
        self.EPsizes1("(min-width: 768px) 40vw, 100vw");

        self.EPtitle2(page.title2);
        self.EPtextCol2(page.textCol2);
        self.EPimg2(page.images[1].img);
        self.EPcaptionText2(page.images[1].captionText);
        self.EPaltText2(page.images[1].altText);
        self.EPimgPath2("images/extraPages/" + self.EPimg2());
        self.EPsrc2(self.EPimgPath2() + "-440.jpg");
        self.EPsrcset2(makeSrcset(self.EPimgPath2()));
        self.EPsizes2("(min-width: 768px) 40vw, 100vw");
      }
    });

    self.longArtMainIsVisible(true);
    self.articlesLinkWasClicked(true);
  };

};
ko.applyBindings(new ViewModel());
