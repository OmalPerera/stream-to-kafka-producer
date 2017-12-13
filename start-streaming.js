// create a producer and connect to a Zookeeper to send the payloads.
var kafka = require('kafka-node'),
Producer = kafka.Producer,
client = new kafka.Client('localhost:2181'),
producer = new Producer(client);

payloads = [
  { topic: 'test', messages: 'First Message', partition: 0 },
];

// ready to send messages to kafka.
producer.on('ready', function () {
  producer.send(payloads, function (err, data) {
    console.log(data);
  });
});

producer.on('error', function (err) {
  console.error('Problem with producing Kafka message ' + err);
});
