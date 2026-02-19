## Task Methods

### setPriority(priority)
Sets task priority. Valid values: 'low', 'medium', 'high', 'urgent'
Returns: boolean - true if priority was set

### addLabel(label)
Adds a unique label to the task. The method enforces a maximum limit of 5 labels per task and prevents duplicates.
* **Parameters:** `label` (string) — The name of the label to add.
* **Constraints:** * Label must not be empty or null.
    * Label must be unique (duplicates are ignored).
    * Maximum of 5 labels per task.
* **Returns:** void
