/* global game */

export class Edges {
  // Function to help with quickly grabbing all the listed values;
  // Will only retrieve objects (definitions)
  static getList() {
    return Object.entries(this)
      .filter(([key, value]) => typeof value === 'object' && value !== null && !Array.isArray(value))
      .map(([key, value]) => ({ [key]: value }));
  }

  // Localize the labels
  static initializeLabels() {
    for (const [key, value] of Object.entries(this)) {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        value.label = game.i18n.localize(value.label)
      }
    }
  }
  
  // Run any necessary compilation on ready
  static onReady() {
    Edges.initializeLabels()
  }
  
  static arsenal = {
    label: "WOD5E.HTR.Arsenal"
  }

  static fleet = {
    label: "WOD5E.HTR.Fleet"
  }

  static ordnance = {
    label: "WOD5E.HTR.Ordnance"
  }

  static library = {
    label: "WOD5E.HTR.Library"
  }

  static improvisedgear = {
    label: "WOD5E.HTR.ImprovisedGear"
  }

  static globalaccess = {
    label: "WOD5E.HTR.GlobalAccess"
  }

  static dronejockey = {
    label: "WOD5E.HTR.DroneJockey"
  }

  static beastwhisperer = {
    label: "WOD5E.HTR.BeastWhisperer"
  }

  static sensetheunnatural = {
    label: "WOD5E.HTR.SenseTheUnnatural"
  }

  static repeltheunnatural = {
    label: "WOD5E.HTR.RepelTheUnnatural"
  }

  static thwarttheunnatural = {
    label: "WOD5E.HTR.ThwartTheUnnatural"
  }

  static artifact = {
    label: "WOD5E.HTR.Artifact"
  }
}

// Hook to call onReady when the game is ready
Hooks.once('ready', Edges.onReady)