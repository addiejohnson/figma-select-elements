function runPlugin() {
    //Get number of selected elements
    //Create a variable called "selectedElements" 
    //access the figma object, then select the current page (see docs) --> call a selection

    let selectedElements = figma.currentPage.selection.length
 
   //Display error messages on invalid selections (only see messages on one element selected)
   // pass in new parameter 'no element selected'

    if (selectedElements === 0) {
        figma.closePlugin('No element selected. Select one element to run plugin!')
        return
    }

    if (selectedElements > 1) {
        figma.closePlugin('Please select a single element to run plugin.')
        return
    }

    //Find the name of the selected element

    let selectedName = figma.currentPage.selection[0].name

    //Callback function for findAll() + pass in node as parameter

    function hasSameName(node) {
        return node.name === selectedName
    }

    //Figma will go through all the elements + nodes in the page -- if the name of that node is the same as the name of our selection, it returns True
    //and then it puts those results in this variable here called withSameName

    //Create a variable to describe all elements with the same name +   //Get all the elements with the same name as the selected one

    let withSameName = figma.currentPage.findAll(hasSameName)

    //Find all is a method to find all elements with the same criteria  --> need to write a call back function .findAll(hasSamename)

    //Select all elements with the same name as the selected one 

    figma.currentPage.selection = withSameName

    //We want the selection to be whatever we got from running the callback function

    figma.closePlugin('You now have ' + withSameName.length + ' Elements selected named ' + selectedName + '!')
    return
}

runPlugin()