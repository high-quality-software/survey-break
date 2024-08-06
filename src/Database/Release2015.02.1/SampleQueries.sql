
-- Use Case1:  select all questions & responses for a given Workflow + Trial_ID
select t.Name,
	w.WorkflowName,
	w.WorkflowOrder,
	q.QuestionName,
	r.ResponseValue,
	r.[USER_ID], -- User who entered data into this form.
	r.FollowupRequired
from TrialCatalog t 
	inner join TrialProgress tp on tp.Trial_ID = t.Trial_ID and tp.isdeleted = 0
	inner join Workflow w on w.Workflow_ID = tp.Workflow_ID and w.IsDeleted = 0 	
	inner join WorkflowQuestion wq on wq.Workflow_ID = w.Workflow_ID and wq.IsDeleted = 0 
	inner join Question q on q.Question_ID = wq.Question_ID and q.IsDeleted = 0 
	inner join Response r on r.Workflow_ID = tp.Workflow_ID
			and r.Trial_ID = tp.Trial_ID
			and r.Question_ID = wq.Question_ID
			and r.IsDeleted = 0 
where t.IsDeleted = 0
	and tp.WorkflowComplete = 0 -- get active workflow (ie. not completed workflow)
    and w.Workflow_ID = 1  --possibly use this predicate but then remove the wp.WorkflowComplete  = 0.  

-- Use Case 2:  web service to update db
-- for web service to persist the results to the database, we will need these columns (preliminary list).
-- This will be defined as SOURCE in merge command
select tp.Workflow_ID,
	   wq.Question_ID, -- represents the id for the test question
       r.ResponseValue, -- represents the entered value
       r.[User_ID],
       GETDATE() as UpdateDateTime -- the Updaete_DateTime column from ipad, don't use GETDATE function
from TrialProgress tp 
	inner join WorkflowQuestion wq on wq.Workflow_ID = tp.Workflow_ID and wq.IsDeleted = 0 
	inner join Response r on r.Workflow_ID = tp.Workflow_ID
			and r.Trial_ID = tp.Trial_ID
			and r.Question_ID = wq.Question_ID
			and r.IsDeleted = 0 
where  tp.Trial_ID = 1 --[Some value here]
	and tp.IsDeleted = 0
	and tp.WorkflowComplete = 0 -- get active workflow (ie. not completed workflow)



*/
-- for reporting : needs to be verified 
select m.Workflow_ID,
	   m.WorkflowName,
	   r.Question_ID, -- represents the id for the test question
	   q.QuestionName,
       r.ResponseValue, -- represents the entered value
       mq.AcceptableHighRange,
       mq.AcceptableHighRange,
       r.[User_ID],
       GETDATE() as UpdateDateTime -- the Updaete_DateTime column on SQL Lite db
from Response r   
      inner join WorkflowQuestion mq on mq.Question_ID = r.Question_ID and mq.IsDeleted = 0 
      inner join Question q on q.Question_ID = mq.Question_ID and q.IsDeleted = 0 
      inner join Workflow m on m.Workflow_ID = mq.Workflow_ID and m.IsDeleted = 0 
      inner join [User] u on u.[User_ID] = r.[User_ID] and u.IsDeleted = 0 
where r.IsDeleted = 0
--	and mq.ReportFlag = 1 -- need to add this column
