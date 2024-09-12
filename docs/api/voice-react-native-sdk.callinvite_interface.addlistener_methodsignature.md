<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@twilio/voice-react-native-sdk](./voice-react-native-sdk.md) &gt; [CallInvite](./voice-react-native-sdk.callinvite_interface.md) &gt; [addListener](./voice-react-native-sdk.callinvite_interface.addlistener_methodsignature.md)

## CallInvite.addListener() method

Accepted event. Raised when the call invite has been accepted.

<b>Signature:</b>

```typescript
addListener(acceptedEvent: CallInvite.Event.Accepted, listener: CallInvite.Listener.Accepted): this;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  acceptedEvent | [CallInvite.Event.Accepted](./voice-react-native-sdk.callinvite_namespace.event_enum.md) | The raised event string. |
|  listener | [CallInvite.Listener.Accepted](./voice-react-native-sdk.callinvite_namespace.listener_namespace.accepted_typealias.md) | A listener function that will be invoked when the event is raised. |

<b>Returns:</b>

this

- The call invite object.

## Remarks


## Example


```ts
voice.on(Voice.Event.CallInvite, (callInvite) => {
  callInvite.on(CallInvite.Event.Accepted, (call) => {
    // the call invite was accepted through either the native layer
    // or the js layer
  });
});
```
