class TaskDTO {
  constructor(
    senderId,
    assignedToId,
    documentType,
    deadline,
    urgency,
    additionalInfo
  ) {
    this.senderId = senderId;
    this.assignedToId = assignedToId;
    this.documentType = documentType;
    this.deadline = deadline;
    this.urgency = urgency;
    this.additionalInfo = additionalInfo;
  }
}

module.exports = TaskDTO;
