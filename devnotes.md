# persisting state
- componentDidMount sets state based on data pulled from firebase realtime db
- put `onbeforeunload` event listener in DOM during componentdidmount, this saves state to db when window/tab is closed

# 4/14/22 still todo
~monthly cumulative total~
~saving the drink/smoke/sub1700 checks to state~
~make a 'save week' button under the weekly drink/spend section that saves weekly total to a cumulative monthly spending value in state, which gets added to the `Total Monthly Expenses` value and then clears out the weekly drinking/spending~
~make pie chart for monthly expenses?~