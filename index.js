import validator from "@mitchell-collins/validator";

/**
 * The `SuperClass` constructor is used to define a super class, it creates a private attribute: `super` 
 * which holds the name of the super class. It defines getter and setter methods for this attribute.
 * 
 * Example:
 * 
 *      class Person extends SuperClass {
 *          constructor(personName) {
 *              super("Person"); // defines the name of super class
 *              this.name = personName;
 *          }
 *      } 
 * 
 *      const dave = new Person("Dave");
 * 
 *      console.log(dave.getSuper()); //output: "Person"
 */
export default class SuperClass {
    /**
     * Holds the name of the super class.
     * @type {String}
     */
    #super;

    /**
     * The `SuperClass` constructor is used to define a super class, it creates a private attribute: `super` 
     * which holds the name of the super class. It defines getter and setter methods for this attribute.
     * 
     * Example:
     * 
     *      class Person extends SuperClass {
     *          constructor(personName) {
     *              super("Person"); // defines the name of super class
     *              this.name = personName;
     *          }
     *      } 
     * 
     *      const dave = new Person("Dave");
     * 
     *      console.log(dave.getSuper()); //output: "Person"
     * 
     * @param {String} superClassName
     */
    constructor(superClassName) {
        validator.checkUndefined(superClassName);
        validator.checkDataType(superClassName, "string");
        this.#super = superClassName;
    }

    /**
     * Returns the name of this instances super class.
     * @returns {String}
     */
    getSuper() {
        return this.#super;
    }

    /**
     * Used to set a new name for this instances super class.
     * @param {String} newSuper 
     */
    setSuper(newSuper) {
        validator.checkUndefined(newSuper);
        validator.checkDataType(newSuper, "string");
        this.#super = newSuper;
    }
}