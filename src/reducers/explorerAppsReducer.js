import {
	ADD_DOCUMENT_FOLDER,
	ADD_PHOTO_FOLDER,
	ADD_MUSIC_FOLDER,
	ADD_VIDEO_FOLDER
} from '../actions/types';

const localstore = localStorage.getItem('FluentUI');

const initialState = {
	documentApps: {
		folders: localstore.documentFolders ? localstore.documentFolders : {},
		apps: [
			'ru.domo.cocoatop64',
			'com.getdropbox.Dropbox',
			'com.apple.DocumentsApp',
			'com.tigisoftware.Filza',
			'ws.hbang.Terminal',
			'jp.soh.reprovision.ios',
			'com.spark.snowboardapplication',
			'org.coolstar.libhooker',
			'com.google.Drive',
			'com.apple.iCloudDriveApp',
			'com.microsoft.skydrive',
			'com.readdle.ReaddleDocsIPad',
			'com.eilvera.idwl',
			'com.hamzawi.myfilemanager',
			'mega.ios',
			'com.goodiware.goodreader4',
			'com.goodiware.grpro',
			'com.TapMedia.filebox',
			'de.zuhanden.filemanager',
			'com.hianzinjong.Downloads-Lite',
			'com.eilvera.idwl',
			'com.ipopapp.filemanagerfree',
			'com.estmob.paprika',
			'com.imobie.AnyTrans',
			'com.sandstudio.airdroid.iphone',
			'com.lenovo.anyshare',
			'org.coolstar.SileoStore',
			'xyz.willy.zebra',
			'com.cultoftheilluminati.DynaWalliOS',
			'de.mass1veerr0r.bundleidsxii',
			'com.electrateam.chimera',
			'com.muirey03.cr4shedgui',
			'com.saurik.Cydia',
			'com.amywhile.dra1n-fix',
			'org.coolstar.electra',
			'com.tigisoftware.Filza',
			'com.johncoates.Flex',
			'com.ivanobilenchi.icleaner',
			'com.geosn0w.iSecureOS',
			'com.spark.snowboardapplication',
			'com.ex.substiture.settings',
			'com.odysseyteam.taurine',
			'co.dynastic.tsssaver',
			'science.xnu.undecimus'
		]
	},
	musicApps: {
		folders: localstore.musicFolders ? localstore.musicFolders : {},
		apps: [
			'com.apple.Music',
			'com.spotify.client',
			'com.pandora',
			'com.google.ios.youtubemusic',
			'com.shazam.Shazam',
			'com.audiomack.iphone',
			'com.soundcloud.TouchApp',
			'com.melodis.soundhound.free',
			'com.clearchannel.iheartradio',
			'com.apple.mobilegarageband',
			'com.amazon.mp3.AmazonCloudPlayer',
			'com.feelthemusi.musi',
			'com.Saavn.Saavn',
			'com.til.gaana',
			'com.allindianews.tamilradio',
			'Samachar',
			'com.luc.audiocloud',
			'com.aspiro.TIDAL',
			'com.deezer.Deezer',
			'com.mmm.projectcarmen',
			'com.accuradio.AccuRadio',
			'com.anghami.anghami',
			'com.bandcamp.iosapp',
			'com.til.gaana',
			'com.rhapsody.iphone.Rhapsody3',
			'com.tunein.TuneInRadio',
			'com.alexanderben.RadioIn'
		]
	},
	videoApps: {
		folders: localstore.videoFolders ? localstore.videoFolders : {},
		apps: [
			'com.google.ios.youtube',
			'com.netflix.Netflix',
			'com.disney.disneyplus',
			'com.apple.tv',
			'com.adrise.tubitv',
			'com.plexapp.plex',
			'in.startv.hotstar',
			'com.abcdigital.abc.videoplayer',
			'com.amazon.aiv.AIVApp',
			'tv.twitch',
			'com.hulu.plus',
			'com.hbo.hbonow',
			'com.roku.ios.roku',
			'tv.pluto.ios',
			'com.nbcuni.nbc.portal',
			'com.zhiliaoapp.musically',
			'com.balaji.alt',
			'com.free.movies',
			'com.justwatch.justwatch',
			'com.erosnow.erosnow',
			'com.zeeTV.DIDS4',
			'com.aha.ahaflix',
			'com.sptios.set',
			'com.showtime.standalone',
			'com.movietrailer.theateraroundyou',
			'com.tencent.qqlivei18n.us',
			'com.tencent.live4iphone',
			'com.cbsvideo.app',
			'com.iflix.play',
			'com.crunchyroll.iphone',
			'com.free.movies',
			'com.curiosity.curiositystream',
			'com.discovery.mobile.discoveryplus',
			'com.udemy',
			'com.espn.ScoreCenter'
		]
	},
	photoApps: {
		folders: localstore.photoFolders ? localstore.photoFolders : {},
		apps: [
			'com.burbn.instagram',
			'com.toyopagroup.picaboo',
			'com.adobe.PSMobile',
			'co.bazaart.app',
			'com.adobe.lens',
			'com.picsart.studio',
			'com.cardinalblue.PicCollage',
			'co.visualsupply.cam',
			'InstaSize',
			'io.faceapp.ios',
			'com.camerasideas.InstaShot',
			'com.quvideo.XiaoYing',
			'com.pinsotech.filto',
			'com.lightricks.Facetune2',
			'com.niksoftware.snapseedforipad',
			'com.google.photos',
			'com.adobe.lrmobilephone',
			'com.click2mobile.collagegrameFree',
			'com.YunFang.PhotoGrid',
			'com.autodesk.ios.pixlrexpressplus',
			'com.2012gpower.imagesizer',
			'com.autodesk.pixlromatic',
			'com.everimaging.photoeffectstudio',
			'com.magicv.AirBrush',
			'com.canva.canvaeditor',
			'com.axiemsystems.photoeditorminus',
			'com.gamma.photeditor.Photo-Editor-Pro',
			'co.bazaart.app',
			'com.prisma-ai.app',
			'com.apperto.piclab',
			'pinterest',
			'com.unsplash.Unsplash',
			'com.pexels.official.app.ios',
			'com.apalonapps.wallpaperspys',
			'net.zedge.wallpapers',
			'com.apple.mobileslideshow'
		]
	}
};

function explorerAppsReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case ADD_DOCUMENT_FOLDER:
			return {
				...state,
				documentApps: {
					...state.documentApps,
					documentFolders: payload
				}
			};
		case ADD_MUSIC_FOLDER:
			return {
				...state,
				musicApps: {
					...state.musicApps,
					musicFolders: payload
				}
			};
		case ADD_PHOTO_FOLDER:
			return {
				...state,
				photoApps: {
					...state.photoApps,
					photoFolders: payload
				}
			};
		case ADD_VIDEO_FOLDER:
			return {
				...state,
				videoApps: {
					...state.videoApps,
					videoFolders: payload
				}
			};
		default:
			return state;
	}
}

export default explorerAppsReducer;
