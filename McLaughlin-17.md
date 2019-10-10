# Sarah McLaughlin To-Do List

# Original team design document (Group 14 - Assignment 4): https://github.com/SarahMac11/skm9b3/blob/master/assignment-four/Group%2014%20-%20Assignment%204.docx

# Activies:
## Grading Assignment:
	# Login Page 
		## Methods: 
		- login()
		- validateUser()
		- resetPassword()
		- userVerification()
	# Submission Page
		## Methods:
		- checkForSubmission()
		- checkForLateSubmission()
		- getStudentSubmission()
		- viewStudentSubmission()
		- downloadFile()
	# Determine grade of submission
		## Methods:
		- viewRubric()
		- finalizeGrade()
	# Submission Page
		## Methods:
		- publishGrade()
	# Calculate overall grade of student
		## Methods:
		- calculateGrade()
		- calculateOverallGrade()

## Creating Course:
	# Login Page
		## Methods: 
		- login()
		- validateUser()
		- resetPassword()
		- userVerification()
	# Create Course Page
		## Methods:
		- createCourseID()
		- createCourseTitle()
		- getTime()
		- getLocation()
		- getSection()
	# Permit/Disallow Access to Instructor Page
		## Methods:
		- getCourseID()
		- getInstructorID()
		- addInstructor()
		- allowAccessToCourse()
		- removeAccessFromCourse()
	# Permit/Disallow Section Access Page
		## Methods:
		- getTAID()
		- getSection()
		- allowAccessToCourse()
		- removeAccessFromCourse()
	# Course Homepage
		## Methods:
		- addSyllabus()
		- addLink()
		- addStudents()
		- addFiles()

## Submitting a Project:
	# Login Page
		## Methods: 
		- login()
		- validateUser()
		- resetPassword()
		- userVerification()
	# Assignment Page
		## Methods:
		- selectFile()
		- getFileType()
		- previewFile()
	# Submission Page
		## Methods:
		- submitFile()
		- includeLink()
		- getFileExtension()
		- getFileExtension()
		- verifySubmission()
	# Preview Page
		## Methods:
		- viewFile()
		- viewHardCopy()
	# Submission Page
		## Methods:
		- downloadFile()
		- previewFile()

## Creating an Assignment:
	# Login Page
		## Methods: 
		- login()
		- validateUser()
		- resetPassword()
		- userVerification()
	# Assignment Creation Page
		## Methods:
		- createName()
		- createDescription()
	# Upload Relevant Documents
		## Methods:
		- uploadFile()
		- includeLink()
		- uploadRubric()
		- setPossiblePoints()
	# Due Date Page
		## Methods:
		- setDate()
		- createCalendarEvent()
	# Publish Page
		## Methods:
		- makePublic()
		- sendAnnouncement()

## Adding/Removing Students:
	# Login Page
		## Methods: 
		- login()
		- validateUser()
		- resetPassword()
		- userVerification()
	# Permit Section Access Page	
		## Methods:
		- getStudentID()
		- getCourseID()
		- allowAccessToCourse()
		- removeAccessFromCourse()
		

# Classes:
	# University
		## Subclasses:
		- College
		- School
	# Course
		## Subclasses:
		- Section
	# User
		## Subclasses:
		- Students
		- TA
		- Instructor
		- Administrator
	# AdminUser
		## Subclasses:
		- Students
		- TA
		- Instructor
