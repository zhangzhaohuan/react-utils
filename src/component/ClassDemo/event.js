export default class Event {
    // 监听事件列表
     events = [];
  
     on(eventName, cb) {
      this.events.push({
        name: eventName,
        cb,
      });
      return this;
    }
  
    /**
     * 1. {Event}.fire.call('drop', this, data);
     * 2. {Event}.fire('drop', this, data);
     * @param eventName 事件名
     * @param args 参数
     */
     fire(eventName, ...args) {
      let name = eventName;
      let context = null;
  
      if (Object.prototype.toString.call(this) === '[object String]') {
        name = this;
        context = eventName;
      }
  
      const finder = (context || this).events.find((item) => item.name === name);
  
      if (!finder) {
        return;
      }
  
      if (context) {
        finder.cb.call(context, ...args);
      } else {
        finder.cb(...args);
      }
    }
  
     off(eventName) {
      const index = this.events.findIndex((item) => item.name === eventName);
      this.events.splice(index, 1);
    }
  }
  