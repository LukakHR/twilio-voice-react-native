<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@twilio/voice-react-native-sdk](./voice-react-native-sdk.md) &gt; [Call](./voice-react-native-sdk.call_namespace.md) &gt; [Listener](./voice-react-native-sdk.call_namespace.listener_namespace.md) &gt; [QualityWarningsChanged](./voice-react-native-sdk.call_namespace.listener_namespace.qualitywarningschanged_typealias.md)

## Call.Listener.QualityWarningsChanged type

Quality warnings changed event listener. This should be the function signature of any event listener bound to the [Call.Event.QualityWarningsChanged](./voice-react-native-sdk.call_namespace.event_enum.md) event.

<b>Signature:</b>

```typescript
type QualityWarningsChanged = (currentQualityWarnings: Call.QualityWarning[], previousQualityWarnings: Call.QualityWarning[]) => void;
```
<b>References:</b> [Call.QualityWarning](./voice-react-native-sdk.call_namespace.qualitywarning_enum.md)

## Remarks

See [Call.addListener()](./voice-react-native-sdk.call_interface.addlistener_7_methodsignature.md)<!-- -->.
