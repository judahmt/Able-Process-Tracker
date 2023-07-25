class Task {
  constructor(
    sender,
    assignedTo,
    documentType,
    deadline,
    urgency,
    additionalInfo
  ) {
    this.sender = sender;
    this.assignedTo = assignedTo;
    this.documentType = documentType;
    this.deadline = deadline;
    this.urgency = urgency;
    this.additionalInfo = additionalInfo;
  }
}

module.exports = Task;
