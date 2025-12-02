function createLogEntry(message) {
    const now = new Date();
    const timeestamp = now.toLocaleTimeString('th-TH');

    const eventId = Math.random().toString(16).substring(2, 10).toUpperCase();

    const LogMessage = message.toUpperCase();

    return `[${timeestamp}] [${eventId}] - ${LogMessage}`;
}

const log = createLogEntry('User logged in successfully');
console.log(log);