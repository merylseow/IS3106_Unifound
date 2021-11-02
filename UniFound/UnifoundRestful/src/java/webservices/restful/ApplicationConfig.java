/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package webservices.restful;

import java.util.Set;

/**
 *
 * @author leeleonard
 */
@javax.ws.rs.ApplicationPath("webresources")
public class ApplicationConfig extends javax.ws.rs.core.Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    /**
     * Do not modify addRestResourceClasses() method.
     * It is automatically populated with
     * all resources defined in the project.
     * If required, comment out calling this method in getClasses().
     */
    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(webservices.restful.AnnouncementResource.class);
        resources.add(webservices.restful.ChatResource.class);
        resources.add(webservices.restful.LostnFoundResource.class);
        resources.add(webservices.restful.MessageResource.class);
        resources.add(webservices.restful.ModuleResource.class);
        resources.add(webservices.restful.OldTextbookResource.class);
        resources.add(webservices.restful.StudyBuddyResource.class);
        resources.add(webservices.restful.UserResource.class);
    }
    
}
