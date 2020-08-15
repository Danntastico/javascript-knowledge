const Emitter = (() => {
  const topics = {};
  const hOP = topics.hasOwnProperty;
  console.log(hOP);
  return {
    on: (topic, listener) => {
      if (!hOP.call(topics, topic)) topics[topic] = [];
      topics[topic].push(listener);
      console.log(topics[topic]);
    },
    emit: (topic, info) => {
      if (!hOP.call(topics, topic)) return;
      topics[topic].forEach((item) => {
        item(info != undefined ? info : {});
      });
    },
  };
})();

Emitter.on('lala', (x) => console.log(x));

Emitter.emit('lala', { lala: 'lolo' });
