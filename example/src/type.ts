export interface BoundCallMethod {
  disconnect: () => void;
  hold: () => void;
  mute: () => void;
  sendDigits: (digits: string) => void;
}

export interface BoundCallInfo {
  customParameters: Record<any, any>;
  from?: string;
  to?: string;
  state?: string;
  sid?: string;
  isMuted?: boolean;
  isOnHold?: boolean;
}

export interface BoundCallInvite {
  accept: () => void;
  callSid: string;
  customParameters: Record<any, any>;
  from: string;
  to: string;
  reject: () => void;
}

export interface EventLogItem {
  id: string;
  content: string;
}