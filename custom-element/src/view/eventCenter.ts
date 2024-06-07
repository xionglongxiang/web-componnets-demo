// EventCenter.ts
class EventCenter {
  private events: Record<string, Function[]> = {};

  public on(eventName: string, callback: Function) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  public off(eventName: string, callback: Function) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
    }
  }

  public emit(eventName: string, ...args: any[]) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => callback(...args));
    }
  }
}

export const eventCenter = new EventCenter();

// 将事件中心注册到 window 上
(window as any).eventCenter = eventCenter;
