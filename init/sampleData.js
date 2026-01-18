const sampleListings = [
  {
    title: "Beachside Cottage in Goa",
    description:
      "Relax in a cozy beachfront cottage near Baga Beach with sea breeze and sunsets.",
    image: {
      filename: "listingimage",
      url: "https://www.whiteflowercottages.com/assets/img/resort-in-north-goa.jpg",
    },
    price: 2800,
    location: "Goa",
    country: "India",
  },
  {
    title: "Luxury Apartment in South Mumbai",
    description:"Modern luxury apartment with stunning skyline views in South Mumbai.",
    image: {
      filename: "listingimage",
      url: "https://lntmediaservicestore.blob.core.windows.net/lntrealtyproductionfiles/lntwebapps/typology/2bhk-flats-in-mumbai/src/img/desktop-banner-img-3.webp",
    },
    price: 4500,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Heritage Haveli in Jaipur",
    description:
      "Experience royal living in this traditional Rajasthani haveli.",
    image: {
      filename: "listingimage",
      url: "https://cdn1.tripoto.com/media/filter/nxxl/img/2025553/Image/1610694368_jp3.jpg.webp",
    },
    price: 3500,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Houseboat Stay in Kerala",
    description:
      "Enjoy peaceful backwaters with a luxury houseboat experience.",
    image: {
      filename: "listingimage",
      url: "https://www.alleppeyhouseboat.net/img/slider/slider-3.jpg",
    },
    price: 3200,
    location: "Alappuzha",
    country: "India",
  },
  {
    title: "Mountain Cabin in Manali",
    description:
      "Wooden cabin with breathtaking Himalayan mountain views.",
    image: {
      filename: "listingimage",
      url: "https://stylishcabins.com/wp-content/uploads/2025/01/luxury_mountain_cabin_designs.jpg",
    },
    price: 2400,
    location: "Manali",
    country: "India",
  },
  {
    title: "Lake View Villa in Udaipur",
    description:
      "Luxury villa overlooking Lake Pichola with serene views.",
    image: {
      filename: "listingimage",
      url: "http://www.travelmango.in/wp-content/uploads/2018/02/The_Leela_Palace.jpg",
    },
    price: 4800,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Tea Garden Bungalow in Munnar",
    description:
      "Stay amidst lush tea plantations and misty hills.",
    image: {
      filename: "listingimage",
      url: "https://traveltradejournal.com/wp-content/uploads/2023/10/Lockhart-BungalowSignature-1.jpg",
    },
    price: 2600,
    location: "Munnar",
    country: "India",
  },
  {
    title: "Hill View Homestay in Ooty",
    description:
      "Charming homestay with scenic Nilgiri hill views.",
    image: {
      filename: "listingimage",
      url: "https://images.click.in/classifieds/images/95/26_06_2018_16_01_24_aaf0b9cf47a186676711f25f3fee786b_f0ktsvwgu3.jpg",
    },
    price: 2200,
    location: "Ooty",
    country: "India",
  },
  {
    title: "Modern Flat in Bengaluru",
    description:
      "Centrally located modern flat near tech parks.",
    image: {
      filename: "listingimage",
      url: "https://media.designcafe.com/wp-content/uploads/2020/06/23184157/3bhk-flat-living-room-interior-design-bangalore-bannerghatta-road.jpg",
    },
    price: 3000,
    location: "Bengaluru",
    country: "India",
  },
  {
    title: "River View Cottage in Rishikesh",
    description:
      "Peaceful cottage near the Ganga river, perfect for yoga lovers.",
    image: {
      filename: "listingimage",
      url: "https://campinginrishikesh.in/wp-content/uploads/2020/03/camp-crossfire-river-view.jpg",
    },
    price: 2100,
    location: "Rishikesh",
    country: "India",
  },
  {
    title: "Desert Camp Stay in Jaisalmer",
    description:
      "Experience desert life with luxury tents under the stars.",
    image: {
      filename: "listingimage",
      url: "https://indiathrills.com/wp-content/uploads/2020/07/Camping-in-Sam-sand-dunes.jpg",
    },
    price: 3300,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Snow View Chalet in Gulmarg",
    description:
      "Beautiful wooden chalet with snow-covered mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/15232505/pexels-photo-15232505/free-photo-of-chalets-at-a-skiing-resort.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 4200,
    location: "Gulmarg",
    country: "India",
  },
   {
    title: "Heritage Home in Varanasi",
    description:
      "Stay near the ghats of Varanasi in a peaceful heritage-style home.",
    image: {
      filename: "listingimage",
      url: "https://media.architecturaldigest.in/wp-content/uploads/2018/07/Brijrama-Palace-Varanasi-Interior.jpg",
    },
    price: 1800,
    location: "Varanasi",
    country: "India",
  },
  {
    title: "Beachfront Villa in Gokarna",
    description:
      "Private beachfront villa with stunning Arabian Sea views.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-690283043920836364/original/44d36cff-8007-4593-a356-76288b9a5b9d.jpeg?im_w=720",
    },
    price: 3200,
    location: "Gokarna",
    country: "India",
  },
  {
    title: "Luxury Stay near Taj Mahal",
    description:
      "Premium stay just minutes away from the iconic Taj Mahal.",
    image: {
      filename: "listingimage",
      url: "https://renaesworld.com.au/wp-content/uploads/2023/11/1080-Hotels-to-Stay-near-Taj-Mahal-Agra-1024x577.jpg",
    },
    price: 4000,
    location: "Agra",
    country: "India",
  },
  {
    title: "Forest Lodge in Wayanad",
    description:
      "Nature retreat surrounded by forests and waterfalls.",
    image: {
      filename: "listingimage",
      url: "http://wayanadhomestayresorts.com/wp-content/uploads/2018/09/andBeyond-Phinda-Lodge2-768x432.jpg",
    },
    price: 2600,
    location: "Wayanad",
    country: "India",
  },
  {
    title: "Hilltop Villa in Panchgani",
    description:
      "Luxury villa with panoramic valley views.",
    image: {
      filename: "listingimage",
      url: "http://seoimgak.mmtcdn.com/blog/sites/default/files/images/1_13.jpg",
    },
    price: 3500,
    location: "Panchgani",
    country: "India",
  },
  {
    title: "Lakefront Stay in Nainital",
    description:
      "Beautiful cottage overlooking Naini Lake.",
    image: {
      filename: "listingimage",
      url: "https://assets.cntraveller.in/photos/6811c1589f0e765c08b01c2e/16:9/w_1280,c_limit/Naukuchia%20House5.jpg?mbid=social_retweet",
    },
    price: 2400,
    location: "Nainital",
    country: "India",
  },
  {
    title: "Royal Palace Stay in Bikaner",
    description:
      "Experience royal heritage in a converted palace stay.",
    image: {
      filename: "listingimage",
      url: "https://4.bp.blogspot.com/-ESSeVDE75KQ/WOiF7jKKwoI/AAAAAAAAyTQ/I5BYOP9ufGkh489XVhrKqk80LwuatTdGwCLcB/s1600/Laxmi%2BNivas%2BBikaner%2B3.jpg",
    },
    price: 3800,
    location: "Bikaner",
    country: "India",
  },
  {
    title: "Backwater Villa in Kumarakom",
    description:
      "Peaceful backwater villa with traditional Kerala charm.",
    image: {
      filename: "listingimage",
      url: "https://kumarakomlakeresort.in/keralamonsoons/images/gallery/meandering-pool-villas-1.jpg",
    },
    price: 2900,
    location: "Kumarakom",
    country: "India",
  },
  {
    title: "Modern Studio in Pune",
    description:
      "Centrally located modern studio for business & leisure stays.",
    image: {
      filename: "listingimage",
      url: "https://images.homify.com/c_fill,f_auto,h_700,q_auto/v1559156374/p/photo/image/3073422/11.jpg",
    },
    price: 2200,
    location: "Pune",
    country: "India",
  },
  {
    title: "Snow Cottage in Tawang",
    description:
      "Cozy cottage with breathtaking snow-clad mountain views.",
    image: {
      filename: "listingimage",
      url: "https://thumbs.dreamstime.com/b/snow-covered-tawang-arunachal-pradesh-north-east-india-photo-203344596.jpg",
    },
    price: 3000,
    location: "Tawang",
    country: "India",
  },
   {
    title: "Riverside Cottage in Mahabaleshwar",
    description:
      "Peaceful riverside cottage surrounded by strawberry farms and greenery.",
    image: {
      filename: "listingimage",
      url: "https://thebyke.com/wp-content/uploads/2024/10/20-2.jpg",
    },
    price: 2300,
    location: "Mahabaleshwar",
    country: "India",
  },
  {
    title: "Heritage Home in Mysuru",
    description:
      "Traditional heritage home close to Mysore Palace with authentic interiors.",
    image: {
      filename: "listingimage",
      url: "https://thumbs.dreamstime.com/b/mysore-royal-heritage-home-indian-house-mysore-royal-heritage-home-indian-house-view-383581267.jpg",
    },
    price: 2000,
    location: "Mysuru",
    country: "India",
  },
  {
    title: "Beach Hut Stay in Varkala",
    description:
      "Cliffside beach hut overlooking the Arabian Sea, perfect for sunsets.",
    image: {
      filename: "listingimage",
      url: "https://a0.muscache.com/im/pictures/80e7c2f3-3765-4e35-a3eb-714c83bcf987.jpg",
    },
    price: 2600,
    location: "Varkala",
    country: "India",
  },
  {
    title: "Hill View Resort in Darjeeling",
    description:
      "Enjoy Kanchenjunga views from this cozy hill-view resort.",
    image: {
      filename: "listingimage",
      url: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/10/Summit-Grace-Hotel.jpg?fit=1280%2C853&ssl=1",
    },
    price: 2800,
    location: "Darjeeling",
    country: "India",
  },
  {
    title: "Luxury Villa in Alibaug",
    description:
      "Private luxury villa with pool, just a short ferry ride from Mumbai.",
    image: {
      filename: "listingimage",
      url: "https://tse2.mm.bing.net/th/id/OIP.6hYwOsuHt_JgSKBjLOk09AHaE8?pid=Api&P=0&h=180",
    },
    price: 5200,
    location: "Alibaug",
    country: "India",
  },
  {
    title: "Forest Cabin in Coorg",
    description:
      "Stay amidst coffee plantations and misty forests in Coorg.",
    image: {
      filename: "listingimage",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/3c/3a/3c/these-luxurious-cabins.jpg?w=700&h=-1&s=1",
    },
    price: 2700,
    location: "Coorg",
    country: "India",
  },
  {
    title: "City View Apartment in Hyderabad",
    description:
      "Modern apartment with skyline views near Hitech City.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/originals/ec/17/a8/ec17a84a6163f867e60aa737f3a49002.jpg",
    },
    price: 2400,
    location: "Hyderabad",
    country: "India",
  },
   {
    title: "Cliffside Stay in Vagamon",
    description:
      "Peaceful cliffside stay with misty valley views in Vagamon.",
    image: {
      filename: "listingimage",
      url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/6d/19/30/chillax-vagamon.jpg",
    },
    price: 2300,
    location: "Vagamon",
    country: "India",
  },
  {
    title: "Luxury Palace Stay in Udaipur",
    description:
      "Royal palace-style stay overlooking lakes and heritage architecture.",
    image: {
      filename: "listingimage",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/273425581.jpg?k=a6d2047f5441875a00f177b8784fe31fded7b366ce70f413eb0ca586f682cf57&o=&hp=1",
    },
    price: 5500,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Beachfront Villa in Tarkarli",
    description:
      "Crystal clear beach stay with private access and sea views.",
    image: {
      filename: "listingimage",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/656411102.jpg?k=7e1185b2b5cee354505b239d9266d7b4e14922dcc32f66404c06554bacdbac1a&o=",
    },
    price: 3000,
    location: "Tarkarli",
    country: "India",
  },
  {
    title: "Mountain Homestay in Spiti Valley",
    description:
      "Remote mountain homestay with breathtaking Himalayan landscapes.",
    image: {
      filename: "listingimage",
      url: "https://tse1.mm.bing.net/th/id/OIP.Tcsi4iTNVkTuhOhH-tAT_wHaDt?pid=Api&P=0&h=180",
    },
    price: 2600,
    location: "Spiti Valley",
    country: "India",
  },
  {
    title: "Colonial Bungalow in Shimla",
    description:
      "Colonial-era bungalow with pine forest surroundings.",
    image: {
      filename: "listingimage",
      url: "https://www.holidify.com/images/cmsuploads/compressed/b520986a-7120-47eb-9167-8afb0bf1b275_20210122143649.jpg",
    },
    price: 2800,
    location: "Shimla",
    country: "India",
  },
  {
    title: "Backwater Cottage in Poovar",
    description:
      "Serene backwater cottage where river meets the sea.",
    image: {
      filename: "listingimage",
      url: "https://tse2.mm.bing.net/th/id/OIP.tyYXmgp0_mLayb9FcQJg7QHaEK?pid=Api&P=0&h=180",
    },
    price: 2900,
    location: "Poovar",
    country: "India",
  },
  {
    title: "Heritage Haveli in Mandawa",
    description:
      "Stay in a beautifully restored haveli in Shekhawati region.",
    image: {
      filename: "listingimage",
      url: "https://c8.alamy.com/comp/2G4TH93/heritage-mandawa-haveli-is-situated-in-mandawa-jhunjhunu-shekhawati-rajasthan-india-2G4TH93.jpg",
    },
    price: 3400,
    location: "Mandawa",
    country: "India",
  },
  {
    title: "Luxury Farm Stay in Nashik",
    description:
      "Vineyard-side luxury farm stay with peaceful surroundings.",
    image: {
      filename: "listingimage",
      url: "https://api.avathi.com/images/2_1741864421.webp",
    },
    price: 3200,
    location: "Nashik",
    country: "India",
  },
  {
    title: "Forest Retreat in Satpura",
    description:
      "Wildlife forest retreat near Satpura National Park.",
    image: {
      filename: "listingimage",
      url: "https://tse3.mm.bing.net/th/id/OIP.p8hqSV58Neof64bjRbNxtgHaEv?pid=Api&P=0&h=180",
    },
    price: 3500,
    location: "Satpura",
    country: "India",
  },
  {
    title: "City Apartment in Ahmedabad",
    description:
      "Comfortable city apartment close to major attractions.",
    image: {
      filename: "listingimage",
      url: "https://amazingarchitecture.com/storage/files/1742/architecture-projects/the-grid-architects/urban-oasis/16-urban_oasis%20_gated_community_living_housing_the_grid_architects.jpg",
    },
    price: 2100,
    location: "Ahmedabad",
    country: "India",
  },
];

module.exports = { data: sampleListings };
