class Task {
    constructor(sender, receiver, documentType, deadline, urgency, additionalInfo) {
        this.sender = sender;
        this.receiver = receiver;
        this.documentType = documentType;
        this.deadline = deadline;
        this.urgency = urgency;
        this.additionalInfo = additionalInfo;
    }
}

module.exports = Task;