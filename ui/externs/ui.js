/*! @license
 * Shaka Player
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @externs
 * @suppress {duplicate} To prevent compiler errors with the namespace
 *   being declared both here and by goog.provide in the library.
 */

/** @namespace */
var shaka = {};

/** @namespace */
shaka.extern = {};

/**
 * @typedef {{
 *   base: string,
 *   buffered: string,
 *   played: string,
 *   adBreaks: string
 * }}
 *
 * @property {string} base
 *   The CSS background color applied to the base of the seek bar, on top of
 *   which the buffer level and playback position are shown.
 * @property {string} buffered
 *   The CSS background color applied to the portion of the seek bar showing
 *   what has been buffered ahead of the playback position.
 * @property {string} played
 *   The CSS background color applied to the portion of the seek bar showing
 *   what has been played already.
 * @property {string} adBreaks
 *   The CSS background color applied to the portion of the seek bar showing
 *   when the ad breaks are scheduled to occur on the timeline.
 * @exportDoc
 */
shaka.extern.UISeekBarColors;

/**
 * @typedef {{
 *   base: string,
 *   level: string
 * }}
 *
 * @property {string} base
 *   The CSS background color applied to the base of the volume bar, on top of
 *   which the volume level is shown.
 * @property {string} level
 *   The CSS background color applied to the portion of the volume bar showing
 *   the volume level.
 * @exportDoc
 */
shaka.extern.UIVolumeBarColors;

/**
 * @description
 * The UI's configuration options.
 *
 * @typedef {{
 *   controlPanelElements: !Array.<string>,
 *   overflowMenuButtons: !Array.<string>,
 *   contextMenuElements: !Array.<string>,
 *   statisticsList: !Array.<string>,
 *   adStatisticsList: !Array.<string>,
 *   playbackRates: !Array.<number>,
 *   fastForwardRates: !Array.<number>,
 *   rewindRates: !Array.<number>,
 *   addSeekBar: boolean,
 *   addBigPlayButton: boolean,
 *   customContextMenu: boolean,
 *   castReceiverAppId: string,
 *   castAndroidReceiverCompatible: boolean,
 *   clearBufferOnQualityChange: boolean,
 *   showUnbufferedStart: boolean,
 *   seekBarColors: shaka.extern.UISeekBarColors,
 *   volumeBarColors: shaka.extern.UIVolumeBarColors,
 *   trackLabelFormat: shaka.ui.Overlay.TrackLabelFormat,
 *   textTrackLabelFormat: shaka.ui.Overlay.TrackLabelFormat,
 *   fadeDelay: number,
 *   doubleClickForFullscreen: boolean,
 *   singleClickForPlayAndPause: boolean,
 *   enableKeyboardPlaybackControls: boolean,
 *   enableFullscreenOnRotation: boolean,
 *   forceLandscapeOnFullscreen: boolean,
 *   enableTooltips: boolean,
 *   keyboardSeekDistance: number,
 *   keyboardLargeSeekDistance: number,
 *   fullScreenElement: HTMLElement,
 *   preferDocumentPictureInPicture: boolean,
 *   showAudioChannelCountVariants: boolean,
 *   seekOnTaps: boolean,
 *   tapSeekDistance: number,
 *   refreshTickInSeconds: number,
 *   displayInVrMode: boolean,
 *   defaultVrProjectionMode: string,
 *   setupMediaSession: boolean,
 *   preferVideoFullScreenInVisionOS: boolean,
 *   showAudioCodec: boolean
 * }}
 *
 * @property {!Array.<string>} controlPanelElements
 *   The ordered list of control panel elements of the UI.
 * @property {!Array.<string>} overflowMenuButtons
 *   The ordered list of the overflow menu buttons.
 * @property {!Array.<string>} contextMenuElements
 *   The ordered list of buttons in the context menu.
 * @property {!Array.<string>} statisticsList
 *   The ordered list of statistics present in the statistics container.
 * @property {!Array.<string>} adStatisticsList
 *   The ordered list of ad statistics present in the ad statistics container.
 * @property {!Array.<number>} playbackRates
 *   The ordered list of rates for playback selection.
  * @property {!Array.<number>} fastForwardRates
 *   The ordered list of rates for fast forward selection.
 * @property {!Array.<number>} rewindRates
 *   The ordered list of rates for rewind selection.
 * @property {boolean} addSeekBar
 *   Whether or not a seek bar should be part of the UI.
 * @property {boolean} addBigPlayButton
 *   Whether or not a big play button in the center of the video
 *   should be part of the UI.
 * @property {boolean} customContextMenu
 *   Whether or not a custom context menu replaces the default.
 * @property {string} castReceiverAppId
 *   Receiver app id to use for the Chromecast support.
 * @property {boolean} castAndroidReceiverCompatible
 *   Indicates if the app is compatible with an Android Cast Receiver.
 * @property {boolean} clearBufferOnQualityChange
 *   Only applicable if the resolution selection is part of the UI.
 *   Whether buffer should be cleared when changing resolution
 *   via UI. Clearing buffer would result in immidiate change of quality,
 *   but playback may flicker/stall for a sec as the content in new
 *   resolution is being buffered. Not clearing the buffer will mean
 *   we play the content in the previously selected resolution that we
 *   already have buffered before switching to the new resolution.
 * @property {boolean} showUnbufferedStart
 *   If true, color any unbuffered region at the start of the seek bar as
 *   unbuffered (using the "base" color).  If false, color any unbuffered region
 *   at the start of the seek bar as played (using the "played" color).
 *   <br>
 *   A value of false matches the default behavior of Chrome's native controls
 *   and Shaka Player v3.0+.
 *   <br>
 *   A value of true matches the default behavior of Shaka Player v2.5.
 *   <br>
 *   Defaults to false.
 * @property {shaka.extern.UISeekBarColors} seekBarColors
 *   The CSS colors applied to the seek bar.  This allows you to override the
 *   colors used in the linear gradient constructed in JavaScript, since you
 *   cannot easily do this in pure CSS.
 * @property {shaka.extern.UIVolumeBarColors} volumeBarColors
 *   The CSS colors applied to the volume bar.  This allows you to override the
 *   colors used in the linear gradient constructed in JavaScript, since you
 *   cannot do this in pure CSS.
 * @property {shaka.ui.Overlay.TrackLabelFormat} trackLabelFormat
 *   An enum that determines what is shown in the labels for audio variant
 *   selection.
 *   LANGUAGE means that only the language of the item is shown.
 *   ROLE means that only the role of the item is shown.
 *   LANGUAGE_ROLE means both language and role are shown, or just language if
 *   there is no role.
 *   LABEL means the non-standard DASH "label" attribute or the standard DASH
 *   "Label" element or the HLS "NAME" attribute are shown.
 *   Defaults to LANGUAGE.
 * @property {shaka.ui.Overlay.TrackLabelFormat} textTrackLabelFormat
 *   An enum that determines what is shown in the labels for text track
 *   selection.
 *   LANGUAGE means that only the language of the item is shown.
 *   ROLE means that only the role of the item is shown.
 *   LANGUAGE_ROLE means both language and role are shown, or just language if
 *   there is no role.
 *   LABEL means the non-standard DASH "label" attribute or the standard DASH
 *   "Label" element or the HLS "NAME" attribute are shown.
 *   Defaults to LANGUAGE.
 * @property {number} fadeDelay
 *   The delay (in seconds) before fading out the controls once the user stops
 *   interacting with them.  We recommend setting this to 3 on your cast
 *   receiver UI.
 *   Defaults to 0.
 * @property {boolean} doubleClickForFullscreen
 *   Whether or not double-clicking on the UI should cause it to enter
 *   fullscreen.
 *   Defaults to true.
 * @property {boolean} singleClickForPlayAndPause
 *   Whether or not clicking on the video should cause it to play or pause.
 *   It does not work in VR mode.
 *   Defaults to true.
 * @property {boolean} enableKeyboardPlaybackControls
 *   Whether or not playback controls via keyboard is enabled, such as seek
 *   forward, seek backward, jump to the beginning/end of the video.
 *   Defaults to true.
 * @property {boolean} enableFullscreenOnRotation
 *   Whether or not to enter/exit fullscreen mode when the screen is rotated.
 *   Defaults to true.
 * @property {boolean} forceLandscapeOnFullscreen
 *   Whether or not the device should rotate to landscape mode when the video
 *   enters fullscreen.  Note that this behavior is based on an experimental
 *   browser API, and may not work on all platforms.
 *   Defaults to true.
 * @property {boolean} enableTooltips
 *   Whether or not buttons in the control panel display tooltips that contain
 *   information about their function.
 *   Defaults to false.
 * @property {number} keyboardSeekDistance
 *   The time interval, in seconds, to seek when the user presses the left or
 *   right keyboard keys when the video is selected. If less than or equal to 0,
 *   no seeking will occur.
 *   Defaults to 5 seconds.
 * @property {number} keyboardLargeSeekDistance
 *   The time interval, in seconds, to seek when the user presses the page up or
 *   page down keyboard keys when the video is selected. If less than or equal
 *   to 0, no seeking will occur.
 *   Defaults to 60 seconds.
 * @property {HTMLElement} fullScreenElement
 *   DOM element on which fullscreen will be done.
 *   Defaults to Shaka Player Container.
 * @property {boolean} preferDocumentPictureInPicture
 *   Indicates whether the Document Picture in Picture API is preferred or the
 *   Video Element Picture in Picture API is preferred.
 *   Changing this property in mid-playback may produce undesired behavior if
 *   you are already in PiP.
 *   Defaults to true.
 * @property {boolean} showAudioChannelCountVariants
 *   Indicates whether the combination of language and channel count should be
 *   displayed or if, on the contrary, only the language should be displayed
 *   regardless of the channel count.
 *   Defaults to true.
 * @property {boolean} seekOnTaps
 *   Indicates whether or not a fast-forward and rewind tap button that seeks
 *   video some seconds.
 *   Defaults to true if the browser <code>navigator.maxTouchPoints > 0</code>
 *   is true.
 * @property {number} tapSeekDistance
 *   The time interval, in seconds, to seek when the user presses the left or
 *   right part of the video. If less than or equal to 0,
 *   no seeking will occur.
 *   Defaults to 10 seconds.
 * @property {number} refreshTickInSeconds
 *   The time interval, in seconds, to update the seek bar.
 *   Defaults to 0.125 seconds.
 * @property {boolean} displayInVrMode
 *   If true, the content will be treated as VR.
 *   If false, it will only be treated as VR if we automatically detect it as
 *   such. (See the Enabling VR section in docs/tutorials/ui.md)
 *   Defaults to false.
 * @property {string} defaultVrProjectionMode
 *   Indicate the default VR projection mode.
 *   Possible values: <code>'equirectangular'</code> or <code>'cubemap'</code>.
 *   Defaults to <code>'equirectangular'</code>.
 * @property {boolean} setupMediaSession
 *   If true, MediaSession controls will be managed by the UI. It will also use
 *   the ID3 APIC and TIT2 as image and title in Media Session, and ID3 APIC
 *   will also be used to change video poster.
 *   Defaults to true.
 * @property {boolean} preferVideoFullScreenInVisionOS
 *   If true, we will use the fullscreen API of the video element itself if it
 *   is available in Vision OS. This is useful to be able to access 3D
 *   experiences that are only allowed with the fullscreen of the video element
 *   itself.
 *   Defaults to false.
 * @property {boolean} showAudioCodec
 *   Show the audio codec if the language has more than one audio codec.
 *   Defaults to true.
 * @exportDoc
 */
shaka.extern.UIConfiguration;


/**
 * Interface for UI elements.  UI elements should inherit from the concrete base
 * class shaka.ui.Element.  The members defined in this extern's constructor are
 * all available from the base class, and are defined here to keep the compiler
 * from renaming them.
 *
 * @extends {shaka.util.IReleasable}
 * @interface
 * @exportDoc
 */
shaka.extern.IUIElement = class {
  /**
   * @param {!HTMLElement} parent
   * @param {!shaka.ui.Controls} controls
   */
  constructor(parent, controls) {
    /**
     * @protected {HTMLElement}
     * @exportDoc
     */
    this.parent;

    /**
     * @protected {shaka.ui.Controls}
     * @exportDoc
     */
    this.controls;

    /**
     * @protected {shaka.util.EventManager}
     * @exportDoc
     */
    this.eventManager;

    /**
     * @protected {shaka.ui.Localization}
     * @exportDoc
     */
    this.localization;

    /**
     * @protected {shaka.Player}
     * @exportDoc
     */
    this.player;

    /**
     * @protected {HTMLMediaElement}
     * @exportDoc
     */
    this.video;

    /**
     * @protected {shaka.extern.IAdManager}
     * @exportDoc
     */
    this.adManager;

    /**
     * @protected {shaka.extern.IAd}
     * @exportDoc
     */
    this.ad;
  }

  /**
   * @override
   */
  release() {}
};


/**
 * A factory for creating a UI element.
 *
 * @interface
 * @exportDoc
 */
shaka.extern.IUIElement.Factory = class {
  /**
   * @param {!HTMLElement} rootElement
   * @param {!shaka.ui.Controls} controls
   * @return {!shaka.extern.IUIElement}
   */
  create(rootElement, controls) {}
};


/**
 * Interface for UI range elements.  UI range elements should inherit from the
 * concrete base class shaka.ui.RangeElement.  The members defined in this
 * extern's constructor are all available from the base class, and are defined
 * here to keep the compiler from renaming them.
 *
 * @extends {shaka.extern.IUIElement}
 * @interface
 * @exportDoc
 */
shaka.extern.IUIRangeElement = class {
  /**
   * @param {!HTMLElement} parent
   * @param {!shaka.ui.Controls} controls
   * @param {!Array.<string>} containerClassNames
   * @param {!Array.<string>} barClassNames
   */
  constructor(parent, controls, containerClassNames, barClassNames) {
    /**
     * @protected {!HTMLElement}
     * @exportDoc
     */
    this.container;

    /**
     * @protected {!HTMLInputElement}
     * @exportDoc
     */
    this.bar;
  }

  /**
   * @param {number} min
   * @param {number} max
   */
  setRange(min, max) {}

  /**
   * Called when user interaction begins.
   * To be overridden by subclasses.
   */
  onChangeStart() {}

  /**
   * Called when a new value is set by user interaction.
   * To be overridden by subclasses.
   */
  onChange() {}

  /**
   * Called when user interaction ends.
   * To be overridden by subclasses.
   */
  onChangeEnd() {}

  /** @return {number} */
  getValue() {}

  /** @param {number} value */
  setValue(value) {}

  /** @param {number} value */
  changeTo(value) {}
};

/**
 * Interface for UI settings menus.  UI settings menus should inherit from the
 * concrete base class shaka.ui.SettingsMenu.  The members defined in this
 * extern's constructor are all available from the base class, and are defined
 * here to keep the compiler from renaming them.
 *
 * @extends {shaka.extern.IUIElement}
 * @interface
 * @exportDoc
 */
shaka.extern.IUISettingsMenu = class {
  /**
   * @param {!HTMLElement} parent
   * @param {!shaka.ui.Controls} controls
   * @param {string} iconText
   */
  constructor(parent, controls, iconText) {
    /**
     * @protected {!HTMLButtonElement}
     * @exportDoc
     */
    this.button;

    /**
     * @protected {!HTMLElement}
     * @exportDoc
     */
    this.icon;

    /**
     * @protected {!HTMLElement}
     * @exportDoc
     */
    this.nameSpan;

    /**
     * @protected {!HTMLElement}
     * @exportDoc
     */
    this.currentSelection;

    /**
     * @protected {!HTMLElement}
     * @exportDoc
     */
    this.menu;

    /**
     * @protected {!HTMLButtonElement}
     * @exportDoc
     */
    this.backButton;

    /**
     * @protected {!HTMLElement}
     * @exportDoc
     */
    this.backSpan;
  }
};

/**
 * Interface for SeekBars. SeekBars should inherit from the concrete base
 * class shaka.ui.Element. If you do not need to totaly rebuild the
 * SeekBar, you should consider using shaka.ui.RangeElement or
 * shaka.ui.SeekBar as your base class.
 *
 * @extends {shaka.extern.IUIRangeElement}
 * @interface
 * @exportDoc
 */
shaka.extern.IUISeekBar = class {
  /** @return {number} */
  getValue() {}

  /** @param {number} value */
  setValue(value) {}

  /**
   * Called by Controls on a timer to update the state of the seek bar.
   * Also called internally when the user interacts with the input element.
   */
  update() {}

  /** @return {boolean} */
  isShowing() {}
};

/**
 * A factory for creating a SeekBar element.
 *
 * @interface
 * @exportDoc
 */
shaka.extern.IUISeekBar.Factory = class {
  /**
   * @param {!HTMLElement} rootElement
   * @param {!shaka.ui.Controls} controls
   * @return {!shaka.extern.IUISeekBar}
   */
  create(rootElement, controls) {}
};

/**
 * @interface
 * @exportDoc
 */
shaka.extern.IUIPlayButton = class {
  /**
   * @param {!HTMLElement} parent
   * @param {!shaka.ui.Controls} controls
   */
  constructor(parent, controls) {
    /**
     * @protected {!HTMLButtonElement}
     * @exportDoc
     */
    this.button;
  }

  /** @return {boolean} */
  isPaused() {}

  /** @return {boolean} */
  isEnded() {}
};
