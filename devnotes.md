# persisting state
- componentDidMount sets state based on data pulled from firebase realtime db
- put `onbeforeunload` event listener in DOM during componentdidmount, this saves state to db when window/tab is closed

# 4/14/22 still todo
- monthly cumulative total
- saving the drink/smoke/sub1700 checks to state
    - store an array of checked radio buttons by id 
    - remove them when unchecked
    - have function called in componentDidMount that runs a for loop to mark them as checked when page loads