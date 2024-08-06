/**
 * Created by hcasa on 11/13/2015.
 */

var InitialDownload = Object.create({});

InitialDownload.session = null;
InitialDownload.transaction = null;

InitialDownload.saveCrops = function (crops) {

    var deferred = $.Deferred();

    persistence.transaction(function (tx) {

        var i, len;
        var enqueue = 0;
        var dequeue = 0;

        for (i = 0, len = crops.length; i < len; i += 1) {
            var crop = crops[i];

            var id = persistence.createUUID();
            var cropId = crop.CropID;
            var name = crop.Name;

            //TODO: remove crop cache allowing crop name into trial pull from API
            SiteCache[cropId] = {CropId: cropId, Name: name};

            var qry = "insert into Crop (id, CropId, Name) values (?, ?, ?)";
            enqueue++;
            deferred.notifyWith(this, [dequeue, enqueue]);

            tx.executeSql(qry, [id, cropId, name],
                function () {

                    dequeue++;
                    deferred.notifyWith(this, [dequeue, len]);
                    if (enqueue == dequeue) {
                        deferred.resolveWith(this, [dequeue, len]);
                    }
                },
                function () {
                    dequeue++;
                    deferred.rejectWith(this, [dequeue, len]);
                    if (enqueue == dequeue) {
                        deferred.resolveWith(this, [dequeue, len]);
                    }
                });
        }

        if (enqueue == 0 && dequeue == 0) {
            deferred.resolveWith(this, [dequeue, enqueue]);
        }

    });

    return deferred.promise();
};

InitialDownload.saveTraits = function (traits) {

    var deferred = $.Deferred();

    persistence.transaction(function (tx) {

        var i, len;
        var enqueue = 0;
        var dequeue = 0;

        for (i = 0, len = traits.length; i < len; i += 1) {
            var trait = traits[i];

            var id = persistence.createUUID();
            var traitId = trait.TraitID;
            var name = trait.Name;

            //TODO: remove trait cache allowing trait name into trial pull from API
            TraitCache[traitId] = {TraitId: traitId, Name: name};

            var qry = "insert into Trait (id, TraitId, Name) values (?, ?, ?)";
            enqueue++;
            deferred.notifyWith(this, [dequeue, enqueue]);

            tx.executeSql(qry, [id, traitId, name],
                function () {

                    dequeue++;
                    deferred.notifyWith(this, [dequeue, len]);
                    if (enqueue == dequeue) {
                        deferred.resolveWith(this, [dequeue, len]);
                    }
                },
                function () {
                    dequeue++;
                    deferred.rejectWith(this, [dequeue, len]);
                    if (enqueue == dequeue) {
                        deferred.resolveWith(this, [dequeue, len]);
                    }
                });
        }

        if (enqueue == 0 && dequeue == 0) {
            deferred.resolveWith(this, [dequeue, enqueue]);
        }

    });

    return deferred.promise();
};

InitialDownload.saveSites = function (sites) {

    var deferred = $.Deferred();

    persistence.transaction(function (tx) {

        var i, len;
        var enqueue = 0;
        var dequeue = 0;

        for (i = 0, len = sites.length; i < len; i += 1) {
            var site = sites[i];

            var id = persistence.createUUID();
            var siteId = site.SiteID;
            var name = site.Name;

            //TODO: remove site cache allowing site name into trial pull from API
            SiteCache[siteId] = {SiteId: siteId, Name: name};

            var qry = "insert into Site (id, SiteId, Name) values (?, ?, ?)";
            enqueue++;
            deferred.notifyWith(this, [dequeue, enqueue]);

            tx.executeSql(qry, [id, siteId, name],
                function () {

                    dequeue++;
                    deferred.notifyWith(this, [dequeue, len]);
                    if (enqueue == dequeue) {
                        deferred.resolveWith(this, [dequeue, len]);
                    }
                },
                function () {
                    dequeue++;
                    deferred.rejectWith(this, [dequeue, len]);
                    if (enqueue == dequeue) {
                        deferred.resolveWith(this, [dequeue, len]);
                    }
                });
        }

        if (enqueue == 0 && dequeue == 0) {
            deferred.resolveWith(this, [dequeue, enqueue]);
        }

    });

    return deferred.promise();
};

InitialDownload.saveUsers = function (users) {

    var deferred = $.Deferred();

    persistence.transaction(function (tx) {

        var i, len;
        var enqueue = 0;
        var dequeue = 0;

        for (i = 0, len = users.length; i < len; i += 1) {
            var user = users[i];

            var id = persistence.createUUID();
            var userId = user.UserID;
            var userAlias = user.UserAlias;
            var firstName = user.FirstName;
            var lastName = user.LastName;
            var userTypeID = user.UserTypeID;
            //var email = user.Email;
            var officeNumber = user.OfficeNumber;
            var siteLocation = user.SiteLocation;

            //TODO: remove user cache allowing primary srr name into trial pull from API
            UserCache[userId] = {
                UserId: userId,
                FistName: firstName,
                LastName: lastName,
                OfficeNumber: officeNumber,
                SiteLocation: siteLocation
            };

            var qry = "insert into User (id, UserId, UserAlias, FirstName, LastName, UserTypeId, OfficeNumber, SiteLocation) values (?, ?, ?, ?, ?, ?, ?, ?)";

            enqueue++;
            deferred.notifyWith(this, [dequeue, enqueue]);

            tx.executeSql(qry, [id, userId, userAlias, firstName, lastName, userTypeID, officeNumber, siteLocation],
                function () {

                    dequeue++;
                    deferred.notifyWith(this, [dequeue, len]);
                    if (enqueue == dequeue) {
                        deferred.resolveWith(this, [dequeue, len]);
                    }
                },
                function () {
                    dequeue++;
                    deferred.rejectWith(this, [dequeue, len]);
                    if (enqueue == dequeue) {
                        deferred.resolveWith(this, [dequeue, len]);
                    }
                });
        }

        if (enqueue == 0 && dequeue == 0) {
            deferred.resolveWith(this, [dequeue, enqueue]);
        }

    });

    return deferred.promise();
};

InitialDownload.saveWorkflows = function (workflows) {

    var deferred = $.Deferred();

    persistence.transaction(function (tx) {

        var i, len;
        var enqueue = 0;
        var dequeue = 0;

        for (i = 0, len = workflows.length; i < len; i += 1) {
            var workflow = workflows[i];

            var id = persistence.createUUID();
            var workflowId = workflow.WorkflowID;
            var workflowName = workflow.Name;
            var workflowOrder = workflow.Order;

            var qry = "insert into Workflow (id, WorkflowId, WorkflowName, WorkflowOrder) values (?, ?, ?, ?)";

            enqueue++;
            deferred.notifyWith(this, [dequeue, enqueue]);

            tx.executeSql(qry, [id, workflowId, workflowName, workflowOrder],
                function () {

                    dequeue++;
                    deferred.notifyWith(this, [dequeue, len]);
                    if (enqueue == dequeue) {
                        deferred.resolveWith(this, [dequeue, len]);
                    }
                },
                function () {
                    dequeue++;
                    deferred.rejectWith(this, [dequeue, len]);
                    if (enqueue == dequeue) {
                        deferred.resolveWith(this, [dequeue, len]);
                    }
                });
        }

        if (enqueue == 0 && dequeue == 0) {
            deferred.resolveWith(this, [dequeue, enqueue]);
        }

    });

    return deferred.promise();
};

InitialDownload.saveTrials = function (trialArray) {

    var deferred = $.Deferred();

    persistence.transaction(function (tx) {

        var i, len;
        var enqueue = 0;
        var dequeue = 0;

        for (i = 0, len = trialArray.length; i < len; i += 1) {
            var trial = trialArray[i];

            var id = persistence.createUUID();
            var trialId = trial.TrialID;
            var name = trial.Name;
            var city = trial.City;
            var state = trial.State;
            var farmName = trial.FarmName;
            var trialYear = trial.TrialYear;
            var addess = trial.Addess;
            var zip = trial.Zip;
            var cropName = CropCache[trial.CropID].Name;
            var traitName = TraitCache[trial.TraitID].Name;
            var siteName = SiteCache[trial.SiteID].Name;
            var county = trial.Country;
            var complianceStatus = trial.ComplianceStatus;
            var IRPUserId = trial.IRPUserID;
            var leadSRRUserId = trial.LeadSRRUserID;
            var primarySRRUserId = trial.PrimarySRRUserID;

            var qry = "insert into Trial (id, TrialId, Name, FarmName, CropName, TraitName, SiteName, IRPUserId, LeadSRRUserId, PrimarySRRUserId, TrialYear, Address, City, County, State, Zip, ComplianceStatus ) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            enqueue++;
            deferred.notifyWith(this, [dequeue, enqueue]);

            tx.executeSql(qry, [id, trialId, name, farmName, cropName, traitName, siteName, IRPUserId, leadSRRUserId, primarySRRUserId, trialYear, addess, city, county, state, zip, complianceStatus],
                function () {
                    dequeue++;
                    deferred.notifyWith(this, [dequeue, len]);
                    if (enqueue == dequeue) {
                        deferred.resolveWith(this, [dequeue, len]);
                    }
                },
                function () {
                    dequeue++;
                    deferred.rejectWith(this, [dequeue, len]);
                    if (enqueue == dequeue) {
                        deferred.resolveWith(this, [dequeue, len]);
                    }
                });
        }

        if (enqueue == 0 && dequeue == 0) {
            deferred.resolveWith(this, [dequeue, enqueue]);
        }

    });

    return deferred.promise();
};

InitialDownload.saveTrialNotes = function (trialNoteArray) {

    var deferred = $.Deferred();

    persistence.transaction(function (tx) {

        var i, len;
        var enqueue = 0;
        var dequeue = 0;

        for (i = 0, len = trialNoteArray.length; i < len; i += 1) {
            var trialNote = trialNoteArray[i];

            var id = persistence.createUUID();
            var trialNoteId = trialNote.TrialNoteID;
            var trialId = trialNote.TrialID;
            var content = trialNote.Content;
            var qry = "insert into TrialNotes (id, TrialNoteId, TrialId, Content ) values (?, ?, ?, ?)";
            enqueue++;
            deferred.notifyWith(this, [dequeue, enqueue]);

            tx.executeSql(qry, [id, trialNoteId, trialId, content],
                function () {
                    dequeue++;
                    deferred.notifyWith(this, [dequeue, len]);
                    if (enqueue == dequeue) {
                        deferred.resolveWith(this, [dequeue, len]);
                    }
                },
                function () {
                    dequeue++;
                    deferred.rejectWith(this, [dequeue, len]);
                    if (enqueue == dequeue) {
                        deferred.resolveWith(this, [dequeue, len]);
                    }
                });
        }

        if (enqueue == 0 && dequeue == 0) {
            deferred.resolveWith(this, [dequeue, enqueue]);
        }

    });

    return deferred.promise();
};

InitialDownload.saveAttachmentTypes = function (attachmentTypeArray) {

    var deferred = $.Deferred();

    persistence.transaction(function (tx) {

        var i, len;
        var enqueue = 0;
        var dequeue = 0;

        for (i = 0, len = attachmentTypeArray.length; i < len; i += 1) {
            var attachmentType = attachmentTypeArray[i];

            var id = persistence.createUUID();
            var attachmentTypeId = attachmentType.AttachmentTypeID;
            var name = attachmentType.Name;
            var qry = "insert into AttachmentType (id, AttachmentTypeId, Name ) values (?, ?, ?)";
            enqueue++;
            deferred.notifyWith(this, [dequeue, enqueue]);

            tx.executeSql(qry, [id, attachmentTypeId, name],
                function () {
                    dequeue++;
                    deferred.notifyWith(this, [dequeue, len]);
                    if (enqueue == dequeue) {
                        deferred.resolveWith(this, [dequeue, len]);
                    }
                },
                function () {
                    dequeue++;
                    deferred.rejectWith(this, [dequeue, len]);
                    if (enqueue == dequeue) {
                        deferred.resolveWith(this, [dequeue, len]);
                    }
                });
        }

        if (enqueue == 0 && dequeue == 0) {
            deferred.resolveWith(this, [dequeue, enqueue]);
        }

    });

    return deferred.promise();
};

InitialDownload.saveTrialProgress = function (trialProgressArray) {

    var deferred = $.Deferred();

    persistence.transaction(function (tx) {

        var i, len;
        var enqueue = 0;
        var dequeue = 0;

        for (i = 0, len = trialProgressArray.length; i < len; i += 1) {
            var trialProgress = trialProgressArray[i];

            var id = persistence.createUUID();
            var trialId = trialProgress.TrialID;
            var workflowId = trialProgress.WorkflowID;
            var userId = trialProgress.UserID;
            var answered = Form.isCompleted(trialProgress.WorkflowID, trialProgress.Responses) ? 0 : 1;
            var locked = trialProgress.Locked ? 0 : 1;
            var qry = "insert into TrialProgress (id, TrialId, WorkflowId, UserId, Answered, Locked) values (?, ?, ?, ?, ?, ?)";
            enqueue++;
            deferred.notifyWith(this, [dequeue, enqueue]);

            tx.executeSql(qry, [id, trialId, workflowId, userId, answered, locked],
                function () {
                    dequeue++;
                    deferred.notifyWith(this, [dequeue, len]);
                    if (enqueue == dequeue) {
                        deferred.resolveWith(this, [dequeue, len]);
                    }
                },
                function () {
                    dequeue++;
                    deferred.rejectWith(this, [dequeue, len]);
                    if (enqueue == dequeue) {
                        deferred.resolveWith(this, [dequeue, len]);
                    }
                });
        }

        if (enqueue == 0 && dequeue == 0) {
            deferred.resolveWith(this, [dequeue, enqueue]);
        }

    });

    return deferred.promise();
};

InitialDownload.saveResponses = function (trialProgressArray) {

    var deferred = $.Deferred();

    persistence.transaction(function (tx) {

        var i, len;
        var enqueue = 0;
        var dequeue = 0;

        for (i = 0, len = trialProgressArray.length; i < len; i += 1) {
            var trialprogress = trialProgressArray[i];

            var i2, len2;
            for (i2 = 0, len2 = trialprogress.Responses.length; i2 < len2; i2 += 1) {
                var response = trialprogress.Responses[i2];

                if (response.QuestionID < 8800) {

                    var id = persistence.createUUID();
                    var qry = "insert into Response (id, TrialId, WorkflowId, QuestionId, ResponseValue, WaitingToSync) values (?, ?, ?, ?, ?, ?)";
                    enqueue++;
                    deferred.notifyWith(this, [dequeue, enqueue]);

                    tx.executeSql(qry, [id, trialprogress.TrialID, trialprogress.WorkflowID, response.QuestionID, response.ResponseValue, 0],
                        function () {
                            dequeue++;
                            deferred.notifyWith(this, [dequeue, enqueue]);
                            if (enqueue == dequeue) {
                                deferred.resolveWith(this, [dequeue, enqueue]);
                            }
                        },
                        function () {
                            dequeue++;
                            deferred.rejectWith(this, [dequeue, enqueue]);
                            if (enqueue == dequeue) {
                                deferred.resolveWith(this, [dequeue, enqueue]);
                            }
                        });
                }
            }
        }

        if (enqueue == 0 && dequeue == 0) {
            deferred.resolveWith(this, [dequeue, enqueue]);
        }

    });

    return deferred.promise();
};

InitialDownload.saveAttachments = function (trialProgressArray) {

    var deferred = $.Deferred();

    persistence.transaction(function (tx) {

        var i, len;
        var enqueue = 0;
        var dequeue = 0;

        for (i = 0, len = trialProgressArray.length; i < len; i += 1) {
            var trialprogress = trialProgressArray[i];

            var i2, len2;
            for (i2 = 0, len2 = trialprogress.Attachments.length; i2 < len2; i2 += 1) {
                var attachment = trialprogress.Attachments[i2];

                var id = persistence.createUUID();
                var qry = "insert into Attachment (id, AttachmentId, TrialId, WorkflowId, Name) values (?, ?, ?, ?, ?)";
                enqueue++;
                deferred.notifyWith(this, [dequeue, enqueue]);

                tx.executeSql(qry, [id, attachment.AttachmentID, attachment.TrialID, attachment.WorkflowID, attachment.Name],
                    function () {
                        dequeue++;
                        deferred.notifyWith(this, [dequeue, enqueue]);
                        if (enqueue == dequeue) {
                            deferred.resolveWith(this, [dequeue, enqueue]);
                        }
                    },
                    function () {
                        dequeue++;
                        deferred.rejectWith(this, [dequeue, enqueue]);
                        if (enqueue == dequeue) {
                            deferred.resolveWith(this, [dequeue, enqueue]);
                        }
                    });
            }
        }

        if (enqueue == 0 && dequeue == 0) {
            deferred.resolveWith(this, [dequeue, enqueue]);
        }

    });

    return deferred.promise();

};