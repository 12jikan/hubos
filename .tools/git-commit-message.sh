#!/bin/sh  
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD 2>/dev/null)  
if [ -n "$BRANCH_NAME" ] && [ "$BRANCH_NAME" != "HEAD" ] && [ "$SKIP_PREPARE_COMMIT_MSG" != 1 ]; then    
	PREFIX_PATTERN='[A-Z]{2,}-[0-9]{2,}(-[0-9]{2,})?'    
	
	[[ $BRANCH_NAME =~ $PREFIX_PATTERN ]]    
	
	PREFIX=${BASH_REMATCH[0]}    

	PREFIX_IN_COMMIT=$(grep -c "\[$PREFIX\]" "$1")    

	if [[ -n "$BRANCH_NAME" ]] && ! [[ $PREFIX_IN_COMMIT -ge 1 ]]; then                   echo "[$BRANCH_NAME] $(cat "$1")" > "$1"   
        fi 
fi
