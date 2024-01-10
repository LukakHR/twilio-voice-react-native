/**
 * Copyright © 2022 Twilio, Inc. All rights reserved. Licensed under the Twilio
 * license.
 *
 * See LICENSE in the project root for license information.
 */
import { EventEmitter } from 'eventemitter3';
import type { RTCStats } from './';
import type { NativeCallEventType, NativeCallInfo } from './type/Call';
import type { CustomParameters } from './type/common';
import type { TwilioError } from './error/TwilioError';
/**
 * Defines strict typings for all events emitted by {@link (Call:class)
 * | Call objects}.
 *
 * @remarks
 * Note that the `on` function is an alias for the `addListener` function.
 * They share identical functionality and either may be used interchangeably.
 *
 * - See also the {@link (Call:class) | Call class}.
 * - See also the {@link (Call:namespace) | Call namespace}.
 *
 * @public
 */
export declare interface Call {
    /**
     * ------------
     * Emit Typings
     * ------------
     */
    /** @internal */
    emit(connectedEvent: Call.Event.Connected): boolean;
    /** @internal */
    emit(connectFailureEvent: Call.Event.ConnectFailure, error: TwilioError): boolean;
    /** @internal */
    emit(reconnectingEvent: Call.Event.Reconnecting, error: TwilioError): boolean;
    /** @internal */
    emit(reconnectedEvent: Call.Event.Reconnected): boolean;
    /** @internal */
    emit(disconnectedEvent: Call.Event.Disconnected, error?: TwilioError): boolean;
    /** @internal */
    emit(ringingEvent: Call.Event.Ringing): boolean;
    /** @internal */
    emit(qualityWarningsChangedEvent: Call.Event.QualityWarningsChanged, currentQualityWarnings: Call.QualityWarning[], previousQualityWarnings: Call.QualityWarning[]): boolean;
    /** @internal */
    emit(callEvent: Call.Event, ...args: any[]): boolean;
    /**
     * ----------------
     * Listener Typings
     * ----------------
     */
    /**
     * Connected event. Raised when the call has successfully connected.
     *
     * @example
     * ```typescript
     * call.addListener(Call.Event.Connected, () => {
     *   // call has been connected
     * });
     * ```
     *
     * @param connectedEvent - The raised event string.
     * @param listener - A listener function that will be invoked when the event
     * is raised.
     * @returns - The call object.
     */
    addListener(connectedEvent: Call.Event.Connected, listener: Call.Listener.Connected): this;
    /**
     * {@inheritDoc (Call:interface).(addListener:1)}
     */
    on(connectedEvent: Call.Event.Connected, listener: Call.Listener.Connected): this;
    /**
     * Connect failure event. Raised when the call has failed to connect.
     *
     * @example
     * ```typescript
     * call.addListener(Call.Event.ConnectFailure, (error) => {
     *   // call was unable to connect, handle error
     * });
     * ```
     *
     * @param connectFailureEvent - The raised event string.
     * @param listener - A listener function that will be invoked when the event
     * is raised.
     * @returns - The call object.
     */
    addListener(connectFailureEvent: Call.Event.ConnectFailure, listener: Call.Listener.ConnectFailure): this;
    /**
     * {@inheritDoc (Call:interface).(addListener:2)}
     */
    on(connectFailureEvent: Call.Event.ConnectFailure, listener: Call.Listener.ConnectFailure): this;
    /**
     * Reconnecting event. Raised when the call is reconnecting.
     *
     * @example
     * ```typescript
     * call.addListener(Call.Event.Reconnecting, (error) => {
     *   // call is attempting to reconnect, handle error
     * });
     * ```
     *
     * @param reconnectingEvent - The raised event string.
     * @param listener - A listener function that will be invoked when the event
     * is raised.
     * @returns - The call object.
     */
    addListener(reconnectingEvent: Call.Event.Reconnecting, listener: Call.Listener.Reconnecting): this;
    /**
     * {@inheritDoc (Call:interface).(addListener:3)}
     */
    on(reconnectingEvent: Call.Event.Reconnecting, listener: Call.Listener.Reconnecting): this;
    /**
     * Reconnected event. Raised when the call has recovered and reconnected.
     *
     * @example
     * ```typescript
     * call.addListener(Call.Event.Reconnected, () => {
     *   // call has reconnected
     * });
     * ```
     *
     * @param reconnectedEvent - The raised event string.
     * @param listener - A listener function that will be invoked when the event
     * is raised.
     * @returns - The call object.
     */
    addListener(reconnectedEvent: Call.Event.Reconnected, listener: Call.Listener.Reconnected): this;
    /**
     * {@inheritDoc (Call:interface).(addListener:4)}
     */
    on(reconnectedEvent: Call.Event.Reconnected, listener: Call.Listener.Reconnected): this;
    /**
     * Disconnected event. Raised when the call has disconnected.
     *
     * @remarks
     * This event can occur in "naturally" disconnected calls and calls
     * disconnected from issues such as network problems. If the SDK has detected
     * an issue that has caused the call to disconnect, then the error parameter
     * will be defined, otherwise it will be undefined.
     *
     * @example
     * ```typescript
     * call.addListener(Call.Event.Disconnected, (error) => {
     *   // call has disconnected
     *   // if a natural disconnect occurred, then error is `undefined`
     *   // if an unnatural disconnect occurred, then error is defined
     * });
     * ```
     *
     * @param disconnectedEvent - The raised event string.
     * @param listener - A listener function that will be invoked when the event
     * is raised.
     * @returns - The call object.
     */
    addListener(disconnectedEvent: Call.Event.Disconnected, listener: Call.Listener.Disconnected): this;
    /**
     * {@inheritDoc (Call:interface).(addListener:5)}
     */
    on(disconnectedEvent: Call.Event.Disconnected, listener: Call.Listener.Disconnected): this;
    /**
     * Ringing event. Raised when the call has begun to ring.
     *
     * @example
     * ```typescript
     * call.addListener(Call.Event.Ringing, () => {
     *   // call is ringing
     * });
     * ```
     *
     * @param ringingEvent - The raised event string.
     * @param listener - A listener function that will be invoked when the event
     * is raised.
     * @returns - The call object.
     */
    addListener(ringingEvent: Call.Event.Ringing, listener: Call.Listener.Ringing): this;
    /**
     * {@inheritDoc (Call:interface).(addListener:6)}
     */
    on(ringingEvent: Call.Event.Ringing, listener: Call.Listener.Ringing): this;
    /**
     * Quality warnings changed event. Raised when a call quality warning is set
     * or unset. All "ongoing" call quality warnings are passed to the invoked
     * listener function.
     *
     * @example
     * ```typescript
     * call.addListener(
     *   Call.Event.QualityWarningsChanged,
     *   (
     *      currentWarnings: Call.QualityWarning[],
     *      previousWarnings: Call.QualityWarning[]
     *   ) => {
     *     // call quality warnings have changed
     *   }
     * );
     * ```
     *
     * @param qualityWarningsChangedEvent - The raised event string.
     * @param listener - A listener function that will be invoked when the event
     * is raised.
     * @returns - The call object.
     */
    addListener(qualityWarningsChangedEvent: Call.Event.QualityWarningsChanged, listener: Call.Listener.QualityWarningsChanged): this;
    /**
     * {@inheritDoc (Call:interface).(addListener:7)}
     */
    on(qualityWarningsChangedEvent: Call.Event.QualityWarningsChanged, listener: Call.Listener.QualityWarningsChanged): this;
    /**
     * Generic event listener typings.
     * @param callEvent - The raised event string.
     * @param listener - A listener function that will be invoked when the event
     * is raised.
     * @returns - The call object.
     */
    addListener(callEvent: Call.Event, listener: Call.Listener.Generic): this;
    /**
     * {@inheritDoc (Call:interface).(addListener:8)}
     */
    on(callEvent: Call.Event, listener: Call.Listener.Generic): this;
}
/**
 * Provides access to information about a call, including the call parameters,
 * and exposes functionality for a call such as disconnecting, muting, and
 * holding.
 *
 * @remarks
 * Note that the call information is fetched as soon as possible from the native
 * layer, but there is no guarantee that all information is immediately
 * available. Methods such as `Call.getFrom()` or `Call.getTo()` may return
 * `undefined`.
 *
 * As call events are received from the native layer, call information will
 * propagate from the native layer to the JS layer and become available.
 * Therefore, it is good practice to read information from the call after an
 * event occurs, or as events occur.
 *
 *  - See the {@link (Call:namespace).Event} enum for events emitted by `Call`
 *    objects.
 *  - See the {@link (Call:interface) | Call interface} for overloaded event
 *    listening methods.
 *  - See the {@link (Call:namespace) | Call namespace} for types and
 *    enumerations used by this class.
 *
 * @public
 */
export declare class Call extends EventEmitter {
    /**
     * The `Uuid` of this call. Used to identify calls between the JS and native
     * layer so we can associate events and native functionality between the
     * layers.
     */
    private _uuid;
    /**
     * Call custom parameters.
     */
    private _customParameters;
    /**
     * Call `from` parameter.
     */
    private _from?;
    /**
     * Initial `connected` timestamp. Milliseconds since epoch.
     */
    private _initialConnectedTimestamp?;
    /**
     * A boolean representing if the call is currently muted.
     */
    private _isMuted?;
    /**
     * A boolean representing if the call is currently on hold.
     */
    private _isOnHold?;
    /**
     * A string representing the SID of this call.
     */
    private _sid?;
    /**
     * The current state of the call.
     *
     * @remarks
     * See {@link (Call:namespace).State}.
     */
    private _state;
    /**
     * Call `to` parameter.
     */
    private _to?;
    /**
     * Handlers for native call events. Set upon construction so we can
     * dynamically bind events to handlers.
     *
     * @privateRemarks
     * This is done by the constructor so this mapping isn't made every time the
     * {@link (Call:class)._handleNativeEvent} function is invoked.
     */
    private _nativeEventHandler;
    /**
     * Constructor for the {@link (Call:class) | Call class}. This should not be
     * invoked by third-party code. All instances of the
     * {@link (Call:class) | Call class} should be made by the SDK and emitted by
     * {@link (Voice:class) | Voice objects}.
     *
     * @param nativeCallInfo - An object containing all of the data from the
     * native layer necessary to fully describe a call, as well as invoke native
     * functionality for the call.
     *
     * @internal
     */
    constructor({ uuid, customParameters, from, sid, state, to, isMuted, isOnHold, initialConnectedTimestamp, }: NativeCallInfo);
    /**
     * This intermediate native call event handler acts as a "gate", only
     * executing the actual call event handler (such as `Connected`) if this call
     * object matches the `Uuid` of the call that had an event raised.
     * @param nativeCallEvent - A call event directly from the native layer.
     */
    private _handleNativeEvent;
    /**
     * Helper function to update the state of the call when a call event occurs
     * that necessitates an update, i.e. upon a
     * {@link (Call:namespace).Event.Connected | Connected event} we want to
     * update the state of the call to also reflect the
     * {@link (Call:namespace).State.Connected | Connected state}.
     * @param nativeCallEvent - The native call event.
     */
    private _update;
    /**
     * Handler for the the {@link (Call:namespace).Event.Connected} event.
     * @param nativeCallEvent - The native call event.
     */
    private _handleConnectedEvent;
    /**
     * Handler for the the {@link (Call:namespace).Event.ConnectFailure} event.
     * @param nativeCallEvent - The native call event.
     */
    private _handleConnectFailureEvent;
    /**
     * Handler for the the {@link (Call:namespace).Event.Disconnected} event.
     * @param nativeCallEvent - The native call event.
     */
    private _handleDisconnectedEvent;
    /**
     * Handler for the the {@link (Call:namespace).Event.Reconnecting} event.
     * @param nativeCallEvent - The native call event.
     */
    private _handleReconnectingEvent;
    /**
     * Handler for the the {@link (Call:namespace).Event.Reconnected} event.
     * @param nativeCallEvent - The native call event.
     */
    private _handleReconnectedEvent;
    /**
     * Handler for the the {@link (Call:namespace).Event.Ringing} event.
     * @param nativeCallEvent - The native call event.
     */
    private _handleRingingEvent;
    /**
     * Handler for the the {@link (Call:namespace).Event.QualityWarningsChanged}
     * event.
     * @param nativeCallEvent - The native call event.
     */
    private _handleQualityWarningsChangedEvent;
    /**
     * Disconnect this side of the call.
     * @returns
     *  A `Promise` that
     *    - Resolves when the call has disconnected.
     *    - Rejects if the native layer cannot disconnect the call.
     */
    disconnect(): Promise<void>;
    /**
     * Get the mute status of this side of the call.
     * @returns
     *  - A boolean representing the muted status of the call.
     *  - `undefined` if the call state has not yet been received from the native
     *    layer.
     */
    isMuted(): boolean | undefined;
    /**
     * Get the hold status of this side of the call.
     * @returns
     *  - A boolean representing the hold status of the call.
     *  - `undefined` if the call state has not yet been received from the native
     *    layer.
     */
    isOnHold(): boolean | undefined;
    /**
     * Return a `Record` of custom parameters given to this call.
     * @returns
     *   - A `Record` of custom parameters.
     */
    getCustomParameters(): CustomParameters;
    /**
     * Get the value of the `from` parameter given to this call.
     * @returns
     *  - A `String` representing the `from` parameter.
     *  - `undefined` if the call information has not yet been received from the
     *    native layer.
     */
    getFrom(): string | undefined;
    /**
     * Get the timestamp (milliseconds since epoch) of the call connected event.
     * @returns
     *  - A `number` representing the timestamp.
     *  - `undefined` if the call has not yet connected.
     */
    getInitialConnectedTimestamp(): number | undefined;
    /**
     * Get the call `SID`.
     * @returns
     *  - A `String` representing the `SID` of the call.
     *  - `undefined` if the call information has not yet been received from the
     *    native layer.
     */
    getSid(): string | undefined;
    /**
     * Get the state of the call object, such as {@link (Call:namespace).State.Connected} or
     * {@link (Call:namespace).State.Disconnected}.
     * @returns
     *  - A {@link (Call:namespace).State}.
     */
    getState(): Call.State;
    /**
     * Gets the `PeerConnection` `WebRTC` stats for the ongoing call.
     * @returns
     *  A `Promise` that
     *    - Resolves with a {@link RTCStats.StatsReport} object representing the
     *      `WebRTC` `PeerConnection` stats of a call.
     *    - Rejects when a {@link RTCStats.StatsReport} cannot be generated for a
     *      call.
     */
    getStats(): Promise<RTCStats.StatsReport>;
    /**
     * Get the value of the `to` parameter given to this call.
     * @returns
     *  - A `String` representing the `to` parameter.
     *  - `undefined` if the call information has not yet been received from the
     *    native layer.
     */
    getTo(): string | undefined;
    /**
     * Put this end of the call on hold or not on hold.
     *
     * @example
     * To put a call on hold
     * ```typescript
     * call.hold(true);
     * ```
     * @example
     * To take a call off hold
     * ```typescript
     * call.hold(false);
     * ```
     *
     * @param hold - A `boolean` representing whether or not to put this end of
     *  the call on hold.
     *
     * @returns
     *  A `Promise` that
     *    - Resolves with the hold status when the call is put on hold or not on
     *      hold.
     *    - Rejects when the call is not able to be put on hold or not on hold.
     */
    hold(hold: boolean): Promise<boolean>;
    /**
     * Mute or unmute this end of the call.
     *
     * @example
     * To mute a call
     * ```typescript
     * call.mute(true);
     * ```
     *
     * @example
     * To unmute a call
     * ```typescript
     * call.mute(false);
     * ```
     *
     * @param mute - A `boolean` representing whether or not to mute this end of
     *  the call.
     *
     * @returns
     *  A `Promise` that
     *    - Resolves with the muted status of the call when the call is muted or
     *      unmuted.
     *    - Rejects when the call is not able to be muted or unmuted.
     */
    mute(mute: boolean): Promise<boolean>;
    /**
     * Send DTMF digits.
     *
     * @example
     * To send the `0` dialtone:
     * ```typescript
     * call.sendDigits('0');
     * ```
     *
     * @example
     * To send the `0` and then `1` dialtone:
     * ```typescript
     * call.sendDigits('01');
     * ```
     *
     * @param digits - A sequence of DTMF digits in a string.
     *
     * @returns
     *  A `Promise` that
     *    - Resolves when the DTMF digits have been sent.
     *    - Rejects when DTMF tones are not able to be sent.
     */
    sendDigits(digits: string): Promise<void>;
    /**
     * Post feedback about a call.
     *
     * @example
     * To report that a call had very significant audio latency:
     * ```typescript
     * call.postFeedback(Call.Score.Five, Call.Issue.AudioLatency);
     * ```
     *
     * @param score - A score representing the serverity of the issue being
     * reported.
     * @param issue - The issue being reported.
     * @returns
     *  A `Promise` that
     *    - Resolves when the feedback has been posted.
     *    - Rejects when the feedback is unable to be sent.
     */
    postFeedback(score: Call.Score, issue: Call.Issue): Promise<void>;
}
/**
 * Namespace for enumerations and types used by
 * {@link (Call:class) | Call objects}.
 *
 * @remarks
 *  - See also the {@link (Call:class) | Call class}.
 *  - See also the {@link (Call:interface) | Call interface}.
 *
 * @public
 */
export declare namespace Call {
    /**
     * Enumeration of all event strings emitted by {@link (Call:class)} objects.
     */
    enum Event {
        /**
         * Event string for the `Connected` event.
         * See {@link (Call:interface).(addListener:2)}.
         */
        'Connected' = "connected",
        /**
         * Event string for the `ConnectedFailure` event.
         * See {@link (Call:interface).(addListener:3)}.
         */
        'ConnectFailure' = "connectFailure",
        /**
         * Event string for the `Reconnecting` event.
         * See {@link (Call:interface).(addListener:4)}.
         */
        'Reconnecting' = "reconnecting",
        /**
         * Event string for the `Reconnected` event.
         * See {@link (Call:interface).(addListener:5)}.
         */
        'Reconnected' = "reconnected",
        /**
         * Event string for the `Disconnected` event.
         * See {@link (Call:interface).(addListener:6)}.
         */
        'Disconnected' = "disconnected",
        /**
         * Event string for the `Ringing` event.
         * See {@link (Call:interface).(addListener:7)}.
         */
        'Ringing' = "ringing",
        /**
         * Event string for the `QualityWarningsChanged` event.
         * See {@link (Call:interface).(addListener:8)}.
         */
        'QualityWarningsChanged' = "qualityWarningsChanged"
    }
    /**
     * An enumeration of all possible {@link (Call:class) | Call object} states.
     */
    enum State {
        /**
         * Call `Connected` state. Occurs when the `Connected` event is raised.
         *
         * @remarks
         * See {@link (Call:interface).(addListener:2)}.
         */
        'Connected' = "connected",
        /**
         * Call `Connecting` state. Occurs when the `Connecting` event is raised.
         *
         * @remarks
         * See {@link (Call:interface).(addListener:3)}.
         */
        'Connecting' = "connecting",
        /**
         * Call `Disconnected` state. Occurs when the `Disconnected` event is
         * raised.
         *
         * @remarks
         * See {@link (Call:interface).(addListener:4)}.
         */
        'Disconnected' = "disconnected",
        /**
         * Call `Reconnecting` state. Occurs when the `Reconnecting` event is raised.
         *
         * @remarks
         * See {@link (Call:interface).(addListener:5)}.
         */
        'Reconnecting' = "reconnecting",
        /**
         * Call `Ringing` state. Occurs when the `Ringing` event is raised.
         *
         * @remarks
         * See {@link (Call:interface).(addListener:6)}.
         */
        'Ringing' = "ringing"
    }
    /**
     * Mapping of {@link (Call:namespace).Event | Call events} to
     * {@link (Call:namespace).State | Call states}.
     *
     * @remarks
     * Note that this mapping is not a 1:1 bijection. Not every event coming from
     * the native layer has a relevant state, and some events share a state.
     * Therefore, this `Record` needs to be marked as `Partial` and
     * undefined-checking logic is needed when using this mapping.
     *
     * @internal
     */
    const EventTypeStateMap: Partial<Record<NativeCallEventType, Call.State>>;
    /**
     * An enumeration of all call quality-warning types.
     */
    enum QualityWarning {
        /**
         * Raised when the call detects constant audio input, such as silence.
         */
        ConstantAudioInputLevel = "constant-audio-input-level",
        /**
         * Raised when the network encounters high jitter.
         */
        HighJitter = "high-jitter",
        /**
         * Raised when the network encounters high packet loss.
         */
        HighPacketLoss = "high-packet-loss",
        /**
         * Raised when the network encounters high packet round-trip-time.
         */
        HighRtt = "high-rtt",
        /**
         * Raised when the call detects a low mean-opinion-score or MOS.
         */
        LowMos = "low-mos"
    }
    /**
     * An enumeration of all scores that could be used to rate the experience of
     * a call or issues encountered during the call.
     */
    enum Score {
        /**
         * An issue was not encountered or there is no desire to report said issue.
         */
        NotReported = 0,
        /**
         * An issue had severity approximately 1/5.
         */
        One = 1,
        /**
         * An issue had severity approximately 2/5.
         */
        Two = 2,
        /**
         * An issue had severity approximately 3/5.
         */
        Three = 3,
        /**
         * An issue had severity approximately 4/5.
         */
        Four = 4,
        /**
         * An issue had severity approximately 5/5.
         */
        Five = 5
    }
    /**
     * An enumeration of call issues that can be reported.
     */
    enum Issue {
        /**
         * No issue is reported.
         */
        NotReported = "not-reported",
        /**
         * The call was dropped unexpectedly.
         */
        DroppedCall = "dropped-call",
        /**
         * The call encountered significant audio latency.
         */
        AudioLatency = "audio-latency",
        /**
         * One party of the call could not hear the other callee.
         */
        OneWayAudio = "one-way-audio",
        /**
         * Call audio was choppy.
         */
        ChoppyAudio = "choppy-audio",
        /**
         * Call audio had significant noise.
         */
        NoisyCall = "noisy-call",
        /**
         * Call audio had significant echo.
         */
        Echo = "echo"
    }
    /**
     * Listener types for all events emitted by a
     * {@link (Call:class) | Call object.}
     */
    namespace Listener {
        /**
         * Generic event listener. This should be the function signature of any
         * event listener bound to any call event.
         *
         * @remarks
         * See {@link (Call:interface).(addListener:1)}.
         */
        type Generic = (...args: any[]) => void;
        /**
         * Connected event listener. This should be the function signature of any
         * event listener bound to the {@link (Call:namespace).Event.Connected}
         * event.
         *
         * @remarks
         * See {@link (Call:interface).(addListener:2)}.
         */
        type Connected = () => void;
        /**
         * Connect failure event listener. This should be the function signature of
         * any event listener bound to the
         * {@link (Call:namespace).Event.ConnectFailure} event.
         *
         * @remarks
         * See {@link (Call:interface).(addListener:3)}.
         *
         * See {@link TwilioErrors} for all error classes.
         */
        type ConnectFailure = (error: TwilioError) => void;
        /**
         * Reconnecting event listener. This should be the function signature of any
         * event listener bound to the {@link (Call:namespace).Event.Reconnecting}
         * event.
         *
         * @remarks
         * See {@link (Call:interface).(addListener:4)}.
         *
         * See {@link TwilioErrors} for all error classes.
         */
        type Reconnecting = (error: TwilioError) => void;
        /**
         * Reconnected event listener. This should be the function signature of any
         * event listener bound to the {@link (Call:namespace).Event.Reconnected}
         * event.
         *
         * @remarks
         * See {@link (Call:interface).(addListener:5)}.
         */
        type Reconnected = () => void;
        /**
         * Disconnected event listener. This should be the function signature of any
         * event listener bound to the {@link (Call:namespace).Event.Disconnected}
         * event.
         *
         * @remarks
         * See {@link (Call:interface).(addListener:6)}.
         *
         * See {@link TwilioErrors} for all error classes.
         */
        type Disconnected = (error?: TwilioError) => void;
        /**
         * Ringing event listener. This should be the function signature of any
         * event listener bound to the {@link (Call:namespace).Event.Ringing} event.
         *
         * @remarks
         * See {@link (Call:interface).(addListener:7)}.
         */
        type Ringing = () => void;
        /**
         * Quality warnings changed event listener. This should be the function
         * signature of any event listener bound to the
         * {@link (Call:namespace).Event.QualityWarningsChanged} event.
         *
         * @remarks
         * See {@link (Call:interface).(addListener:8)}.
         */
        type QualityWarningsChanged = (currentQualityWarnings: Call.QualityWarning[], previousQualityWarnings: Call.QualityWarning[]) => void;
    }
}