//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BaseMVC.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Languages
    {
        public Languages()
        {
            this.AboutUS = new HashSet<AboutUS>();
            this.ContrllersActions = new HashSet<ContrllersActions>();
            this.FrameColor = new HashSet<FrameColor>();
            this.KendoSkin = new HashSet<KendoSkin>();
            this.News = new HashSet<News>();
            this.Slider = new HashSet<Slider>();
            this.TellUS = new HashSet<TellUS>();
            this.Test = new HashSet<Test>();
            this.Users = new HashSet<Users>();
            this.UsersAccess = new HashSet<UsersAccess>();
            this.UserTypes = new HashSet<UserTypes>();
            this.UserTypesAccess = new HashSet<UserTypesAccess>();
        }
    
        public long LanguageID { get; set; }
        public string LanguageName { get; set; }
        public string LanguageAbb { get; set; }
        public Nullable<System.DateTime> RegisterDatTim { get; set; }
        public Nullable<System.DateTime> LastUpdateDatTim { get; set; }
    
        public virtual ICollection<AboutUS> AboutUS { get; set; }
        public virtual ICollection<ContrllersActions> ContrllersActions { get; set; }
        public virtual ICollection<FrameColor> FrameColor { get; set; }
        public virtual ICollection<KendoSkin> KendoSkin { get; set; }
        public virtual ICollection<News> News { get; set; }
        public virtual ICollection<Slider> Slider { get; set; }
        public virtual ICollection<TellUS> TellUS { get; set; }
        public virtual ICollection<Test> Test { get; set; }
        public virtual ICollection<Users> Users { get; set; }
        public virtual ICollection<UsersAccess> UsersAccess { get; set; }
        public virtual ICollection<UserTypes> UserTypes { get; set; }
        public virtual ICollection<UserTypesAccess> UserTypesAccess { get; set; }
    }
}