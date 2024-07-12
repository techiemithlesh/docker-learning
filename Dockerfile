FROM node

# IF WANT TO USE SPECIFIC VERSION node:20

#FOLDER OR DIRECTORY IS CREATING
WORKDIR /reactapp  

# COPY THE WORKING DIRECTORY
COPY . .

# INSTALL NODE_MODULES
RUN npm install

# PORT SETTING
EXPOSE 5173

# RUN PROJECT
CMD [ "npm", "run", "dev" ]




