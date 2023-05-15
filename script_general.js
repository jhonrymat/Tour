(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","backgroundColor":["#FFFFFF"],"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_084A60C5_1FF7_79DB_41BE_907BB5B243DE], 'cardboardAvailable')","class":"Player","data":{"textToSpeechConfig":{"speechOnQuizQuestion":false,"rate":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false,"pitch":1},"locales":{"es":"locale/es.txt"},"defaultLocale":"es","name":"Player10017","history":{}},"scrollBarMargin":2,"defaultMenu":["fullscreen","mute","rotation"],"propagateClick":false,"layout":"absolute","scripts":{"updateDeepLink":TDV.Tour.Script.updateDeepLink,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"initAnalytics":TDV.Tour.Script.initAnalytics,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"initQuiz":TDV.Tour.Script.initQuiz,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"downloadFile":TDV.Tour.Script.downloadFile,"registerKey":TDV.Tour.Script.registerKey,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"existsKey":TDV.Tour.Script.existsKey,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"unregisterKey":TDV.Tour.Script.unregisterKey,"executeJS":TDV.Tour.Script.executeJS,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setMapLocation":TDV.Tour.Script.setMapLocation,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"isPanorama":TDV.Tour.Script.isPanorama,"createTween":TDV.Tour.Script.createTween,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"init":TDV.Tour.Script.init,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"translate":TDV.Tour.Script.translate,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getKey":TDV.Tour.Script.getKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getMediaByName":TDV.Tour.Script.getMediaByName,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setLocale":TDV.Tour.Script.setLocale,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"shareSocial":TDV.Tour.Script.shareSocial,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"clone":TDV.Tour.Script.clone,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"playAudioList":TDV.Tour.Script.playAudioList,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizShowScore":TDV.Tour.Script.quizShowScore,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getOverlays":TDV.Tour.Script.getOverlays,"showWindow":TDV.Tour.Script.showWindow,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizStart":TDV.Tour.Script.quizStart,"mixObject":TDV.Tour.Script.mixObject,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setValue":TDV.Tour.Script.setValue,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"startMeasurement":TDV.Tour.Script.startMeasurement,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizFinish":TDV.Tour.Script.quizFinish,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"openLink":TDV.Tour.Script.openLink,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getComponentByName":TDV.Tour.Script.getComponentByName,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"historyGoBack":TDV.Tour.Script.historyGoBack,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"historyGoForward":TDV.Tour.Script.historyGoForward,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPixels":TDV.Tour.Script.getPixels,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"cloneBindings":TDV.Tour.Script.cloneBindings},"gap":10,"height":"100%","minHeight":0,"hash": "5c6aa7f6432ad3de1b2b281d6c1d0b36e680c8d4386f38f33a3f93422b249a3b", "definitions": [{"id":"MainViewer","subtitlesTextShadowVerticalLength":1,"class":"ViewerArea","data":{"name":"Main Viewer"},"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"subtitlesGap":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"progressBackgroundColorRatios":[0],"playbackBarProgressBackgroundColor":["#3399FF"],"propagateClick":false,"vrPointerSelectionColor":"#FF6600","subtitlesBackgroundColor":"#000000","toolTipTextShadowColor":"#000000","toolTipPaddingTop":4,"playbackBarProgressBorderRadius":0,"subtitlesTextShadowOpacity":1,"progressRight":"33%","progressBottom":10,"toolTipFontSize":"1.11vmin","progressOpacity":0.7,"progressHeight":2,"progressBarBackgroundColorDirection":"horizontal","progressBorderSize":0,"progressBarBorderColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"firstTransitionDuration":0,"subtitlesTop":0,"subtitlesTextShadowColor":"#000000","toolTipShadowColor":"#333138","progressBarBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","minHeight":50,"toolTipPaddingLeft":6,"toolTipBorderColor":"#767676","playbackBarBorderRadius":0,"toolTipFontColor":"#606060","width":"100%","minWidth":100,"playbackBarProgressBorderColor":"#000000","vrPointerSelectionTime":2000,"playbackBarHeadShadowOpacity":0.7,"subtitlesFontColor":"#FFFFFF","progressBarBorderRadius":2,"toolTipPaddingRight":6,"playbackBarHeadBorderRadius":0,"surfaceReticleColor":"#FFFFFF","toolTipPaddingBottom":4,"subtitlesFontSize":"3vmin","playbackBarHeadShadowBlurRadius":3,"progressBarBorderSize":0,"height":"100%","playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"subtitlesBackgroundOpacity":0.2,"subtitlesTextShadowHorizontalLength":1,"progressBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarLeft":0,"subtitlesBottom":50,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarHeadShadow":true,"progressBorderRadius":2,"progressBarBackgroundColor":["#3399FF"],"toolTipBackgroundColor":"#F6F6F6","progressLeft":"33%","playbackBarBackgroundOpacity":1,"subtitlesFontFamily":"Arial","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontFamily":"Arial","playbackBarBottom":5,"progressBackgroundColor":["#000000"],"vrPointerColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeight":10},{"id":"mainPlayList","class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_08BDBF33_1FFA_E8BF_41BA_7FCB4430B064_camera","media":"this.panorama_08BDBF33_1FFA_E8BF_41BA_7FCB4430B064","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_0A2EA66B_1FFA_98AF_41A0_16FC817248A9_camera","media":"this.panorama_0A2EA66B_1FFA_98AF_41A0_16FC817248A9","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 2)","player":"this.MainViewerPanoramaPlayer","class":"Video360PlayListItem","end":"this.trigger('tourEnded')","camera":"this.media_081EFBFB_1FED_EFAF_418C_3E3F4476F33E_camera","media":"this.media_081EFBFB_1FED_EFAF_418C_3E3F4476F33E","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)"}]},{"id":"IconButton_084A60C5_1FF7_79DB_41BE_907BB5B243DE","backgroundOpacity":0,"class":"IconButton","right":"3.31%","propagateClick":false,"verticalAlign":"middle","data":{"name":"IconButton12329"},"bottom":"6.4%","maxHeight":70,"maxWidth":70,"height":70,"width":69.2,"minHeight":1,"minWidth":1,"horizontalAlign":"center","iconURL":"skin/IconButton_084A60C5_1FF7_79DB_41BE_907BB5B243DE.png"},{"id":"panorama_08BDBF33_1FFA_E8BF_41BA_7FCB4430B064","label":trans('panorama_08BDBF33_1FFA_E8BF_41BA_7FCB4430B064.label'),"class":"Panorama","hfovMax":130,"thumbnailUrl":"media/panorama_08BDBF33_1FFA_E8BF_41BA_7FCB4430B064_t.jpg","overlays":["this.overlay_0928251F_1FEB_9867_4188_F1B77BC13746","this.overlay_0951B503_1FEE_985F_41AC_2830573C1E6D","this.overlay_07449B29_1FEA_A8AB_41A2_7CABE802CE71","this.overlay_093E66CC_1FEB_79EA_41B6_4CC7DBB1FDD3","this.overlay_0874FBAD_1F97_EFAB_41B6_3752EF98ED3C"],"vfov":180,"hfov":360,"adjacentPanoramas":[{"backwardYaw":0,"yaw":-118.94,"panorama":"this.media_081EFBFB_1FED_EFAF_418C_3E3F4476F33E","distance":48.44,"class":"AdjacentPanorama","data":{"overlayID":"overlay_0951B503_1FEE_985F_41AC_2830573C1E6D"},"select":"this.overlay_0951B503_1FEE_985F_41AC_2830573C1E6D.get('areas').forEach(function(a){ a.trigger('click') })"},{"backwardYaw":0,"yaw":0,"panorama":"this.media_081EFBFB_1FED_EFAF_418C_3E3F4476F33E","distance":100,"class":"AdjacentPanorama","data":{"overlayID":"overlay_0874FBAD_1F97_EFAB_41B6_3752EF98ED3C"},"select":"this.overlay_0874FBAD_1F97_EFAB_41B6_3752EF98ED3C.get('areas').forEach(function(a){ a.trigger('click') })"},{"backwardYaw":28.72,"yaw":144.71,"panorama":"this.panorama_0A2EA66B_1FFA_98AF_41A0_16FC817248A9","distance":2.88,"class":"AdjacentPanorama","data":{"overlayID":"overlay_0928251F_1FEB_9867_4188_F1B77BC13746"},"select":"this.overlay_0928251F_1FEB_9867_4188_F1B77BC13746.get('areas').forEach(function(a){ a.trigger('click') })"},{"backwardYaw":28.72,"yaw":-7.95,"panorama":"this.panorama_0A2EA66B_1FFA_98AF_41A0_16FC817248A9","distance":3.65,"class":"AdjacentPanorama","data":{"overlayID":"overlay_093E66CC_1FEB_79EA_41B6_4CC7DBB1FDD3"},"select":"this.overlay_093E66CC_1FEB_79EA_41B6_4CC7DBB1FDD3.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"135%","frames":[{"cube":{"levels":[{"height":2048,"tags":"ondemand","url":"media/panorama_08BDBF33_1FFA_E8BF_41BA_7FCB4430B064_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":4,"width":12288,"colCount":24},{"height":1024,"tags":"ondemand","url":"media/panorama_08BDBF33_1FFA_E8BF_41BA_7FCB4430B064_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":2,"width":6144,"colCount":12},{"height":512,"tags":["ondemand","preload"],"url":"media/panorama_08BDBF33_1FFA_E8BF_41BA_7FCB4430B064_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":1,"width":3072,"colCount":6},{"height":2048,"tags":"mobilevr2gen","url":"media/panorama_08BDBF33_1FFA_E8BF_41BA_7FCB4430B064_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","rowCount":1,"width":12288,"colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_08BDBF33_1FFA_E8BF_41BA_7FCB4430B064_t.jpg"}],"data":{"label":"IMG_20230315_135012_00_093"}},{"id":"window_081D8251_1FEE_98FB_4175_A8FED970C7A6","hideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"backgroundColor":[],"shadowVerticalLength":0,"showEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"class":"Window","headerVerticalAlign":"middle","footerBackgroundOpacity":1,"data":{"name":"Window15483"},"veilColorDirection":"horizontal","titlePaddingBottom":5,"closeButtonIconColor":"#000000","titlePaddingTop":5,"closeButtonIconHeight":12,"closeButtonBorderColor":"#000000","footerHeight":5,"modal":true,"propagateClick":false,"verticalAlign":"middle","footerBackgroundColorRatios":[0,0.8980392156862745,1],"title":trans('window_081D8251_1FEE_98FB_4175_A8FED970C7A6.title'),"titlePaddingRight":5,"layout":"vertical","footerBorderColor":"#000000","bodyBorderColor":"#000000","veilColorRatios":[0,1],"veilColor":["#000000","#000000"],"closeButtonRollOverBorderSize":0,"headerPaddingRight":10,"width":400,"bodyPaddingRight":5,"height":600,"closeButtonRollOverBorderColor":"#000000","titleFontColor":"#000000","minHeight":0,"titleFontFamily":"Arial","shadowSpread":1,"closeButtonPaddingLeft":0,"closeButtonBorderRadius":11,"minWidth":0,"bodyPaddingLeft":5,"bodyBorderSize":0,"closeButtonRollOverIconLineWidth":2,"titleHorizontalAlign":"left","closeButtonPaddingTop":0,"headerBorderColor":"#000000","shadowHorizontalLength":3,"closeButtonRollOverIconColor":"#FFFFFF","closeButtonBackgroundColor":[],"closeButtonPressedBackgroundOpacity":0,"veilOpacity":0.4,"backgroundColorRatios":[],"closeButtonBorderSize":0,"shadowColor":"#000000","bodyBackgroundColorRatios":[0,0.5019607843137255,1],"scrollBarMargin":2,"footerBackgroundColorDirection":"vertical","closeButtonIconWidth":12,"bodyPaddingBottom":5,"titleFontSize":"1.29vmin","overflow":"scroll","headerBorderSize":0,"bodyPaddingTop":5,"closeButtonPressedBackgroundColor":["#3A1D1F"],"headerBackgroundOpacity":1,"closeButtonPressedBackgroundColorRatios":[0],"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonPressedIconLineWidth":2,"shadowOpacity":0.5,"closeButtonRollOverBackgroundColor":["#C13535"],"bodyBackgroundOpacity":1,"footerBorderSize":0,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"closeButtonBackgroundOpacity":0,"veilShowEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"gap":10,"headerPaddingBottom":10,"closeButtonPressedIconColor":"#FFFFFF","closeButtonIconLineWidth":2,"headerPaddingLeft":10,"headerBackgroundColorDirection":"vertical","closeButtonPressedBorderColor":"#000000","closeButtonPaddingRight":0,"shadow":true,"closeButtonRollOverBackgroundColorRatios":[0],"closeButtonRollOverBackgroundOpacity":0,"scrollBarColor":"#000000","closeButtonBackgroundColorRatios":[],"horizontalAlign":"center","closeButtonPressedBorderSize":0,"borderRadius":5,"titlePaddingLeft":5,"headerPaddingTop":10,"veilHideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"headerBackgroundColorRatios":[0,0.09803921568627451,1],"bodyBackgroundColorDirection":"vertical","children":["this.htmlText_081DC251_1FEE_98FB_41B7_66A916790E01"],"closeButtonPaddingBottom":0},{"id":"window_07B0F975_1F95_A8BA_4177_19D61A9CCF62","hideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"backgroundColor":[],"shadowVerticalLength":0,"showEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"class":"Window","headerVerticalAlign":"middle","footerBackgroundOpacity":1,"data":{"name":"Window18092"},"veilColorDirection":"horizontal","titlePaddingBottom":5,"closeButtonIconColor":"#000000","titlePaddingTop":5,"closeButtonIconHeight":12,"closeButtonBorderColor":"#000000","footerHeight":5,"modal":true,"propagateClick":false,"verticalAlign":"middle","footerBackgroundColorRatios":[0,0.8980392156862745,1],"title":trans('window_07B0F975_1F95_A8BA_4177_19D61A9CCF62.title'),"titlePaddingRight":5,"layout":"vertical","footerBorderColor":"#000000","bodyBorderColor":"#000000","veilColorRatios":[0,1],"veilColor":["#000000","#000000"],"closeButtonRollOverBorderSize":0,"headerPaddingRight":10,"width":400,"bodyPaddingRight":5,"height":600,"closeButtonRollOverBorderColor":"#000000","titleFontColor":"#000000","minHeight":0,"titleFontFamily":"Arial","shadowSpread":1,"closeButtonPaddingLeft":0,"closeButtonBorderRadius":11,"minWidth":0,"bodyPaddingLeft":5,"bodyBorderSize":0,"closeButtonRollOverIconLineWidth":2,"titleHorizontalAlign":"left","closeButtonPaddingTop":0,"headerBorderColor":"#000000","shadowHorizontalLength":3,"closeButtonRollOverIconColor":"#FFFFFF","closeButtonBackgroundColor":[],"closeButtonPressedBackgroundOpacity":0,"veilOpacity":0.4,"backgroundColorRatios":[],"closeButtonBorderSize":0,"shadowColor":"#000000","bodyBackgroundColorRatios":[0,0.5019607843137255,1],"scrollBarMargin":2,"footerBackgroundColorDirection":"vertical","closeButtonIconWidth":12,"bodyPaddingBottom":5,"titleFontSize":"1.29vmin","overflow":"scroll","headerBorderSize":0,"bodyPaddingTop":5,"closeButtonPressedBackgroundColor":["#3A1D1F"],"headerBackgroundOpacity":1,"closeButtonPressedBackgroundColorRatios":[0],"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonPressedIconLineWidth":2,"shadowOpacity":0.5,"closeButtonRollOverBackgroundColor":["#C13535"],"bodyBackgroundOpacity":1,"footerBorderSize":0,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"closeButtonBackgroundOpacity":0,"veilShowEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"gap":10,"headerPaddingBottom":10,"closeButtonPressedIconColor":"#FFFFFF","closeButtonIconLineWidth":2,"headerPaddingLeft":10,"headerBackgroundColorDirection":"vertical","closeButtonPressedBorderColor":"#000000","closeButtonPaddingRight":0,"shadow":true,"closeButtonRollOverBackgroundColorRatios":[0],"closeButtonRollOverBackgroundOpacity":0,"scrollBarColor":"#000000","closeButtonBackgroundColorRatios":[],"horizontalAlign":"center","closeButtonPressedBorderSize":0,"borderRadius":5,"titlePaddingLeft":5,"headerPaddingTop":10,"veilHideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"headerBackgroundColorRatios":[0,0.09803921568627451,1],"bodyBackgroundColorDirection":"vertical","children":["this.htmlText_07B2C976_1F95_A8A6_41A9_0EEEF8A5869D"],"closeButtonPaddingBottom":0},{"id":"panorama_08BDBF33_1FFA_E8BF_41BA_7FCB4430B064_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"enterPointingToHorizon":true,"initialSequence":"this.sequence_0A2E5D8A_1FFA_A869_419A_038AF76A2491","class":"PanoramaCamera"},{"id":"MainViewerPanoramaPlayer","gyroscopeEnabled":true,"buttonCardboardView":"this.IconButton_084A60C5_1FF7_79DB_41BE_907BB5B243DE","viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","class":"PanoramaPlayer","aaEnabled":true,"arrowKeysAction":"translate","touchControlMode":"drag_rotation"},{"id":"panorama_0A2EA66B_1FFA_98AF_41A0_16FC817248A9","label":trans('panorama_0A2EA66B_1FFA_98AF_41A0_16FC817248A9.label'),"class":"Panorama","hfovMax":130,"thumbnailUrl":"media/panorama_0A2EA66B_1FFA_98AF_41A0_16FC817248A9_t.jpg","overlays":["this.overlay_092E2520_1FEB_9859_41A2_AFFDE37947D4","this.overlay_0931F6CB_1FEB_79EE_4181_89087AE456B0"],"vfov":180,"hfov":360,"adjacentPanoramas":[{"backwardYaw":144.71,"yaw":28.72,"panorama":"this.panorama_08BDBF33_1FFA_E8BF_41BA_7FCB4430B064","distance":1.1,"class":"AdjacentPanorama","data":{"overlayID":"overlay_092E2520_1FEB_9859_41A2_AFFDE37947D4"},"select":"this.overlay_092E2520_1FEB_9859_41A2_AFFDE37947D4.get('areas').forEach(function(a){ a.trigger('click') })"},{"backwardYaw":144.71,"yaw":13.24,"panorama":"this.panorama_08BDBF33_1FFA_E8BF_41BA_7FCB4430B064","distance":3.84,"class":"AdjacentPanorama","data":{"overlayID":"overlay_0931F6CB_1FEB_79EE_4181_89087AE456B0"},"select":"this.overlay_0931F6CB_1FEB_79EE_4181_89087AE456B0.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"135%","frames":[{"cube":{"levels":[{"height":2048,"tags":"ondemand","url":"media/panorama_0A2EA66B_1FFA_98AF_41A0_16FC817248A9_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":4,"width":12288,"colCount":24},{"height":1024,"tags":"ondemand","url":"media/panorama_0A2EA66B_1FFA_98AF_41A0_16FC817248A9_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":2,"width":6144,"colCount":12},{"height":512,"tags":["ondemand","preload"],"url":"media/panorama_0A2EA66B_1FFA_98AF_41A0_16FC817248A9_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":1,"width":3072,"colCount":6},{"height":2048,"tags":"mobilevr2gen","url":"media/panorama_0A2EA66B_1FFA_98AF_41A0_16FC817248A9_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","rowCount":1,"width":12288,"colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_0A2EA66B_1FFA_98AF_41A0_16FC817248A9_t.jpg"}],"data":{"label":"IMG_20230315_135058_00_094"}},{"id":"media_081EFBFB_1FED_EFAF_418C_3E3F4476F33E_camera","initialPosition":{"hfov":120,"class":"RotationalCameraPosition","yaw":35.56,"pitch":-5.52},"enterPointingToHorizon":true,"class":"RotationalCamera"},{"id":"panorama_0A2EA66B_1FFA_98AF_41A0_16FC817248A9_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"enterPointingToHorizon":true,"initialSequence":"this.sequence_0A2E7D8A_1FFA_A869_41A4_7798088B4A8D","class":"PanoramaCamera"},{"id":"media_081EFBFB_1FED_EFAF_418C_3E3F4476F33E","label":trans('media_081EFBFB_1FED_EFAF_418C_3E3F4476F33E.label'),"video":["this.videores_07D0BD74_1F95_E8B9_4192_165B7E3A29A9","this.videores_07F559A1_1FAD_A85B_41A6_92EA5316F0A1"],"class":"Video360","overlays":["this.overlay_095A2504_1FEE_9859_41A4_6950DAD7DFC1","this.overlay_07FB4465_1F95_78DA_41B9_5FD9652C9A4D","this.overlay_084BBBAB_1F97_EFAF_41B8_2901343425A8"],"loop":true,"hfovMax":140,"data":{"label":"Descargar video 360 gratis Mar mediterr\u00e1neo con sonido 01 Descargas360"},"vfov":180,"thumbnailUrl":"media/media_081EFBFB_1FED_EFAF_418C_3E3F4476F33E_t.jpg","hfov":360,"adjacentPanoramas":[{"backwardYaw":-118.94,"yaw":0,"panorama":"this.panorama_08BDBF33_1FFA_E8BF_41BA_7FCB4430B064","distance":100,"class":"AdjacentPanorama","data":{"overlayID":"overlay_095A2504_1FEE_9859_41A4_6950DAD7DFC1"},"select":"this.overlay_095A2504_1FEE_9859_41A4_6950DAD7DFC1.get('areas').forEach(function(a){ a.trigger('click') })"},{"backwardYaw":-118.94,"yaw":-99.73,"panorama":"this.panorama_08BDBF33_1FFA_E8BF_41BA_7FCB4430B064","distance":100,"class":"AdjacentPanorama","data":{"overlayID":"overlay_084BBBAB_1F97_EFAF_41B8_2901343425A8"},"select":"this.overlay_084BBBAB_1F97_EFAF_41B8_2901343425A8.get('areas').forEach(function(a){ a.trigger('click') })"}],"pitch":0,"hfovMin":60},{"id":"overlay_0928251F_1FEB_9867_4188_F1B77BC13746","useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"hfov":25.7,"distance":50,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":144.71,"data":{"label":"IrAImg_20230315_135058_00_094"},"image":"this.res_072CBC72_1F97_68B9_41A8_B8049DCA0022","vfov":23.11,"pitch":-30.56}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_08D63527_1FEB_98A7_41B5_513F62310FA3"],"data":{"label":"IrAImg_20230315_135058_00_094","hasPanoramaAction":true},"enabledInCardboard":true},{"id":"overlay_0951B503_1FEE_985F_41AC_2830573C1E6D","useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"hfov":37.29,"distance":50,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":-118.94,"data":{"label":"IrADescargarVideo360GratisMarMediterr\u00e1neoConSonido01Descargas360"},"image":"this.res_072D6C72_1F97_68B9_41B3_F3BA63C7C2F5","vfov":35.54,"pitch":-2}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_097F850C_1FEE_9869_41AA_1210CEAA8C19"],"data":{"label":"IrADescargarVideo360GratisMarMediterráneoConSonido01Descargas360","hasPanoramaAction":true},"enabledInCardboard":true},{"id":"overlay_07449B29_1FEA_A8AB_41A2_7CABE802CE71","useHandCursor":true,"class":"HotspotPanoramaOverlay","maps":[],"areas":["this.HotspotPanoramaOverlayArea_07687B4E_1FEA_A8E9_41B4_AD72D02D66D7"],"data":{"label":"Imagen"},"items":[{"hfov":14.08,"distance":100,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":0.11,"image":"this.AnimatedImageResource_078550EE_1FB5_99A9_418B_32FFFF36182A","vfov":14.08,"data":{"label":"Imagen"},"pitch":3.81}]},{"id":"overlay_093E66CC_1FEB_79EA_41B6_4CC7DBB1FDD3","useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"hfov":10.5,"distance":50,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":-7.95,"data":{"label":"IrAImg_20230315_135058_00_094"},"image":"this.res_072CBC72_1F97_68B9_41A8_B8049DCA0022","vfov":10.5,"pitch":-24.94}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_078E3170_1FB5_98B9_41B1_81E72318C2C0"],"data":{"label":"IrAImg_20230315_135058_00_094","hasPanoramaAction":true},"enabledInCardboard":true},{"id":"overlay_0874FBAD_1F97_EFAB_41B6_3752EF98ED3C","useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"hfov":12,"distance":50,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"IrADescargarVideo360GratisMarMediterr\u00e1neoConSonido01Descargas360"},"image":"this.res_072CBC72_1F97_68B9_41A8_B8049DCA0022","vfov":12}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_078E0170_1FB5_98B9_41BC_00D9EE04379A"],"data":{"label":"IrADescargarVideo360GratisMarMediterráneoConSonido01Descargas360","hasPanoramaAction":true},"enabledInCardboard":true},{"id":"htmlText_081DC251_1FEE_98FB_41B7_66A916790E01","backgroundOpacity":0,"data":{"name":"HTMLText15484"},"paddingLeft":10,"paddingTop":10,"class":"HTMLText","paddingBottom":10,"paddingRight":10,"scrollBarHorizontalMargin":-3,"propagateClick":false,"scrollBarVisible":"always","height":"100%","minHeight":0,"width":"100%","minWidth":0,"html":trans('htmlText_081DC251_1FEE_98FB_41B7_66A916790E01.html'),"scrollBarColor":"#000000"},{"id":"htmlText_07B2C976_1F95_A8A6_41A9_0EEEF8A5869D","backgroundOpacity":0,"data":{"name":"HTMLText18093"},"paddingLeft":10,"paddingTop":10,"class":"HTMLText","paddingBottom":10,"paddingRight":10,"scrollBarHorizontalMargin":-3,"propagateClick":false,"scrollBarVisible":"always","height":"100%","minHeight":0,"width":"100%","minWidth":0,"html":trans('htmlText_07B2C976_1F95_A8A6_41A9_0EEEF8A5869D.html'),"scrollBarColor":"#000000"},{"id":"sequence_0A2E5D8A_1FFA_A869_419A_038AF76A2491","movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence"},{"id":"overlay_092E2520_1FEB_9859_41A2_AFFDE37947D4","useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"hfov":10.5,"distance":50,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":28.72,"data":{"label":"IrAImg_20230315_135012_00_093"},"image":"this.res_072CBC72_1F97_68B9_41A8_B8049DCA0022","vfov":10.5,"pitch":-57.15}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_08A2AF16_1FEB_A879_41A6_B94276E37F45"],"data":{"label":"IrAImg_20230315_135012_00_093","hasPanoramaAction":true},"enabledInCardboard":true},{"id":"overlay_0931F6CB_1FEB_79EE_4181_89087AE456B0","useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"hfov":20.59,"distance":50,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":13.24,"data":{"label":"IrAImg_20230315_135012_00_093"},"image":"this.res_072CBC72_1F97_68B9_41A8_B8049DCA0022","vfov":17.09,"pitch":-23.89}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_092306D1_1FEB_79FA_4177_F9C531AE1D28"],"data":{"label":"IrAImg_20230315_135012_00_093","hasPanoramaAction":true},"enabledInCardboard":true},{"id":"sequence_0A2E7D8A_1FFA_A869_41A4_7798088B4A8D","movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence"},{"posterURL":trans('videores_07D0BD74_1F95_E8B9_4192_165B7E3A29A9.posterURL'),"id":"videores_07D0BD74_1F95_E8B9_4192_165B7E3A29A9","height":1920,"type":"video/mp4","bitrate":14745,"url":trans('videores_07D0BD74_1F95_E8B9_4192_165B7E3A29A9.url'),"class":"Video360Resource","width":3840,"framerate":25},{"posterURL":trans('videores_07F559A1_1FAD_A85B_41A6_92EA5316F0A1.posterURL'),"id":"videores_07F559A1_1FAD_A85B_41A6_92EA5316F0A1","height":2048,"type":"video/mp4","bitrate":16777,"url":trans('videores_07F559A1_1FAD_A85B_41A6_92EA5316F0A1.url'),"class":"Video360Resource","width":4096,"framerate":25},{"id":"overlay_095A2504_1FEE_9859_41A4_6950DAD7DFC1","useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"hfov":14.08,"distance":50,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","data":{"label":"IrAImg_20230315_135012_00_093"},"image":"this.res_072D6C72_1F97_68B9_41B3_F3BA63C7C2F5","vfov":14.12,"playbackPositions":[{"hfov":14.08,"vfov":14.12,"class":"PanoramaOverlayPlaybackPosition","timestamp":0}]}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_07D5D8B2_1FEA_A9BE_41AD_89AF4B58F481"],"data":{"label":"IrAImg_20230315_135012_00_093","hasPanoramaAction":true},"enabledInCardboard":true},{"id":"overlay_07FB4465_1F95_78DA_41B9_5FD9652C9A4D","useHandCursor":true,"class":"HotspotPanoramaOverlay","maps":[],"areas":["this.HotspotPanoramaOverlayArea_07BEF48E_1F95_7869_4183_0C17681E5AB0"],"data":{"label":"Imagen"},"items":[{"hfov":12,"distance":100,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","pitch":6.85,"yaw":102.54,"image":"this.AnimatedImageResource_078480EF_1FB5_99A7_41B1_6F3171F29745","vfov":12,"data":{"label":"Imagen"},"playbackPositions":[{"hfov":12,"yaw":102.54,"vfov":12,"class":"PanoramaOverlayPlaybackPosition","timestamp":0,"pitch":6.85}]}]},{"id":"overlay_084BBBAB_1F97_EFAF_41B8_2901343425A8","useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_083B6BBD_1F97_EFAB_41B3_D8D70FCBFE85"],"data":{"label":"IrAImg_20230315_135012_00_093"},"items":[{"hfov":28.28,"distance":50,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","pitch":8.92,"yaw":-99.73,"data":{"label":"IrAImg_20230315_135012_00_093"},"image":"this.res_072CBC72_1F97_68B9_41A8_B8049DCA0022","vfov":26.52,"playbackPositions":[{"hfov":12,"yaw":-99.73,"vfov":12,"class":"PanoramaOverlayPlaybackPosition","timestamp":0,"pitch":8.92},{"hfov":28.28,"yaw":-99.73,"vfov":26.52,"class":"PanoramaOverlayPlaybackPosition","timestamp":133.27,"pitch":8.92}]}]},{"id":"res_072CBC72_1F97_68B9_41A8_B8049DCA0022","levels":[{"height":288,"url":"media/res_072CBC72_1F97_68B9_41A8_B8049DCA0022_0.png","class":"ImageResourceLevel","width":288}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_08D63527_1FEB_98A7_41B5_513F62310FA3","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)"},{"id":"res_072D6C72_1F97_68B9_41B3_F3BA63C7C2F5","levels":[{"height":289,"url":"media/res_072D6C72_1F97_68B9_41B3_F3BA63C7C2F5_0.png","class":"ImageResourceLevel","width":288}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_097F850C_1FEE_9869_41AA_1210CEAA8C19","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2); this.MainViewerPanoramaPlayer.play()"},{"id":"HotspotPanoramaOverlayArea_07687B4E_1FEA_A8E9_41B4_AD72D02D66D7","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.showWindow(this.window_081D8251_1FEE_98FB_4175_A8FED970C7A6, 10000, false)"},{"id":"AnimatedImageResource_078550EE_1FB5_99A9_418B_32FFFF36182A","frameDuration":41,"frameCount":22,"levels":[{"height":690,"url":"media/res_072A4C73_1F97_68BF_41BA_8DA656EB3563_0.png","class":"ImageResourceLevel","width":460}],"class":"AnimatedImageResource","rowCount":6,"colCount":4,"finalFrame":"first"},{"id":"HotspotPanoramaOverlayArea_078E3170_1FB5_98B9_41B1_81E72318C2C0","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)"},{"id":"HotspotPanoramaOverlayArea_078E0170_1FB5_98B9_41BC_00D9EE04379A","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2); this.MainViewerPanoramaPlayer.play()"},{"id":"HotspotPanoramaOverlayArea_08A2AF16_1FEB_A879_41A6_B94276E37F45","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)"},{"id":"HotspotPanoramaOverlayArea_092306D1_1FEB_79FA_4177_F9C531AE1D28","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)"},{"id":"HotspotPanoramaOverlayArea_07D5D8B2_1FEA_A9BE_41AD_89AF4B58F481","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)"},{"id":"HotspotPanoramaOverlayArea_07BEF48E_1F95_7869_4183_0C17681E5AB0","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.showWindow(this.window_07B0F975_1F95_A8BA_4177_19D61A9CCF62, null, false)"},{"id":"AnimatedImageResource_078480EF_1FB5_99A7_41B1_6F3171F29745","frameDuration":41,"frameCount":22,"levels":[{"height":690,"url":"media/res_072A4C73_1F97_68BF_41BA_8DA656EB3563_0.png","class":"ImageResourceLevel","width":460}],"class":"AnimatedImageResource","rowCount":6,"colCount":4,"finalFrame":"first"},{"id":"HotspotPanoramaOverlayArea_083B6BBD_1F97_EFAB_41B3_D8D70FCBFE85","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)"}],"children":["this.MainViewer","this.IconButton_084A60C5_1FF7_79DB_41BE_907BB5B243DE"],"minWidth":0,"width":"100%","scrollBarColor":"#000000","backgroundColorRatios":[0]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.0.9.js.map
})();
//Generated with v2023.0.9, Mon May 15 2023