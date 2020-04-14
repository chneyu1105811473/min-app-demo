export default function(options = {}) {
  return Page({
    onShareAppMessage() {
      return {
        title: '组件展示'
      };
    },
    ...options
  });
}
