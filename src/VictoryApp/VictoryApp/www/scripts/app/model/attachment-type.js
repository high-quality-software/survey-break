
/**
 * Created by hcasa on 10/05/2015.
 */

var AttachmentType = Object.create({});

AttachmentType.getByName = function(extension) {

    var name = extension.toUpperCase();
    return AttachmentTypeCache[name];

}


